import uuid
from flask import Flask, request, jsonify, abort
import redis
import pika
import os

# RABBITMQ
def callback(ch, method, properties, body):
    r.set(self.id_message, eval(body))
    print(f" [x] Received {body}")

# RabbitMQ connection details
RABBITMQ_HOST = os.getenv('RABBITMQ_HOST', 'rabbitMQ')
QUEUE_NAME = 'calculation'

# Establish connection to RabbitMQ
def get_rabbitmq_connection():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
    properties = pika.BasicProperties(app_id='example-publisher', content_type='application/json', message_id='messageid')
    return connection

# REDIS
r = redis.Redis(host='redis', port=6379, db=0, decode_responses=True)
app = Flask(__name__)

# API

@app.route('/api/v1/result', methods=['GET'])
def result():
    id_param = request.args.get("id")
    if id_param is None:
        abort(400, description="id parameter is required")
    value = r.get(id_param)
    if value is None:
        abort(404, description="result not found")
    return {'result': value}


@app.route('/api/v1/process', methods=['POST'])
def process():
    try:
        # Get data from request
        data = request.json
        calculation = data.get('calculation', '')
        # Check if calculation is provided
        if not calculation:
            return jsonify({'error': 'Message is required'}), 400
        # Establish connection to RabbitMQ
        connection = get_rabbitmq_connection()
        channel = connection.channel()

        # Declare queue
        channel.queue_declare(queue=QUEUE_NAME, durable=True)
        # Generate unique message id
        message_id = str(uuid.uuid4())
        full_message = {'id': message_id, 'message': calculation}.__str__()

        # Publish message
        channel.basic_publish(exchange='',
                              routing_key=QUEUE_NAME,
                              body=full_message)
        # Close connection
        connection.close()
        # Return message id
        return {'id': message_id}
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)

import uuid
import json

from flask import request, jsonify, Blueprint
from utils.rabbitMQ import get_rabbitmq_connection

process_blueprint = Blueprint('process', __name__)

QUEUE_NAME = 'calculation'

@process_blueprint.route('/api/v1/process', methods=['POST'])
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
        channel.queue_declare(queue=QUEUE_NAME)
        # Generate unique message id
        message_id = str(uuid.uuid4())
        full_message = json.dumps({'id': message_id, 'message': calculation})

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


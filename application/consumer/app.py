import redis
import pika
import os
import json


# RabbitMQ connection details
RABBITMQ_HOST = os.getenv('RABBITMQ_HOST', 'rabbitMQ')
QUEUE_NAME = 'calculation'

# REDIS
r = redis.Redis(host='redis', port=6379, db=0, decode_responses=True)


def main():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
    channel = connection.channel()

    channel.queue_declare(queue=QUEUE_NAME)

    def callback(ch, method, properties, body):
        data = json.loads(body)
        message_id = data['id']
        expression = data['message']
        result = eval(expression)
        r.set(message_id, result)
        print(f" [x] Received {body}")

    channel.basic_consume(queue=QUEUE_NAME, on_message_callback=callback, auto_ack=True)

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)
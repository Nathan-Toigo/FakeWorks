import pika
import os

RABBITMQ_HOST = os.getenv('RABBITMQ_HOST', 'rabbitMQ')

def get_rabbitmq_connection():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
    return connection

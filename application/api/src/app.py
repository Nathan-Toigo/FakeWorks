from flask import Flask
from flask_cors import CORS
import os
import routes

APP_PORT = os.getenv('APP_PORT', 5000)
APP_HOST = os.getenv('APP_HOST', '0.0.0.0')

def create_app():
    api_app = Flask(__name__)
    CORS(api_app)
    routes.register_blueprints(api_app)
    return api_app

if __name__ == '__main__':
    create_app().run(host=APP_HOST, port=APP_PORT)
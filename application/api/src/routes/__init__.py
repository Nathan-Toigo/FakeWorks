from .result import result_blueprint
from .process import process_blueprint

def register_blueprints(app):
    app.register_blueprint(result_blueprint)
    app.register_blueprint(process_blueprint)

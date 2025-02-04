from flask import request, abort, Blueprint
from utils.redis import r

result_blueprint = Blueprint('result', __name__)

@result_blueprint.route('/api/v1/result', methods=['GET'])
def result():
    id_param = request.args.get("id")
    if id_param is None:
        abort(400, description="id parameter is required")
    value = r.get(id_param)
    r.delete(id_param)
    if value is None:
        abort(404, description="result not found")
    return {'result': value}
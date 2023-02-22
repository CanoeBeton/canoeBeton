from flask import jsonify, request

from api.resource import ApiResource

class PingController(ApiResource):
    @staticmethod
    def path():
        return "/ping"

    def get(self):
        return jsonify({'message': 'hello world'})

    def post(self):
        data = request.get_json()
        return jsonify({'data': data}), 201

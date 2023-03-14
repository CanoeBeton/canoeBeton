from flask import jsonify
from api.resource import ApiResource
class HealthController(ApiResource):
    @staticmethod
    def path():
        return "/health"

    def get(self):
        return jsonify({"status": "ok"})


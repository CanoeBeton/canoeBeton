from flask import jsonify
from api.resource import ApiResource, checkAdminRight


class HealthController(ApiResource):
    @staticmethod
    def path():
        return "/health"

    def get(self):
        return jsonify({"status": "ok"})

    def post(self):
        checkAdminRight()
        return jsonify({"status": "ok"})

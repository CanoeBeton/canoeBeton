from flask import request, jsonify

from api.resource import ApiResource
from infra.adminRepository import AdminRepository

admin_repository = AdminRepository()
class AdminController(ApiResource):
    @staticmethod
    def path():
        return "/login"

    def post(self):
        admin_json = request.get_json()
        token = admin_repository.login(admin_json["email"], admin_json["password"])
        return jsonify({"token": {token}})

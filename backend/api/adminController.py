from flask import request, jsonify, make_response

from api.resource import ApiResource, checkAdminRight
from infra.adminRepository import AdminRepository

admin_repository = AdminRepository()


class AdminController(ApiResource):
    @staticmethod
    def path():
        return "/login"

    def post(self):
        admin_json = request.get_json()
        token = admin_repository.login(admin_json["email"], admin_json["password"])
        if token == "":
            return make_response(jsonify({"error": "Invalid email or password"}), 401)
        else:
            return make_response(jsonify({"token": token}))

    def get(self): # to verify token
        checkAdminRight()
        return jsonify({"success": True})



from flask import request, jsonify

from api.resource import ApiResource
from infra.userRepository import UserRepository

user_repository = UserRepository()

class UserController(ApiResource):
    @staticmethod
    def path():
        return "/user"

    def post(self):
        user = request.get_json()
        user_repository.create_user(user["name"], user["role"], user["description"], user["image"])
        return jsonify({"success": True})

    def get(self):
        users = user_repository.get_all_users()
        return jsonify(users)

class UserByIdController(ApiResource):
    @staticmethod
    def path():
        return "/user/<id>"

    def get(self, id):
        user = user_repository.get_user(id)
        return jsonify(user)

    def put(self, id):
        user = request.get_json()
        user_repository.update_user(user["name"], user["role"], user["description"], user["image"], id)
        return jsonify({"success": True})

    def delete(self, id):
        user_repository.delete_user(id)
        return jsonify({"success": True})
from flask import request, jsonify

from api.resource import ApiResource
from infra.userRepository import UserRepository
from domain.user import User
import json

user_repository = UserRepository()

class UserController(ApiResource):
    @staticmethod
    def path():
        return "/user"

    def post(self):
        if(not user_repository.is_valide_token(request.headers.get("authorization").replace("Bearer ", ""))):
            return {"error": "Token invalide"}, 400
        if(not user_repository.is_admin(request.headers.get("authorization").replace("Bearer ", ""))):
            return {"error": "Vous n'êtes pas admin"}, 400
        data = request.get_json()
        user = User(data['type'], data['firstName'], data['lastName'], data['email'])
        if(user_repository.user_exist(user.email)):
            return {"error": "User already exists"}, 400

        user_repository.create_account(user)

    def put(self):
        return {}, 200

    def get(self):
        return {}, 200
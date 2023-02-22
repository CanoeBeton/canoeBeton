from bson import json_util
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
        data = request.get_json()
        if(not user_repository.is_valide_token(request.headers.get("authorization").replace("Bearer ", ""))):
            return {"error": "Token invalide"}, 400
        return user_repository.update_mdp(data['newMdp'], request.headers.get("authorization").replace("Bearer ", ""))

    def get(self):
        users = user_repository.get_all_users()
        return json.loads(json_util.dumps(users))


class LoginController(ApiResource):
    @staticmethod
    def path():
        return "/user:login"

    def post(self):
        data = request.get_json()
        if (not user_repository.user_exist(data['email'])):
            return {"error": "Courriel invalide"}, 400

        return user_repository.login(data['email'], data['password'])

class MeController(ApiResource):
    @staticmethod
    def path():
        return "/user:me"

    def get(self):
        user = user_repository.get(request.headers.get("authorization").replace("Bearer ", ""))
        return json.dumps(user, default=str)

class LogoutController(ApiResource):
    @staticmethod
    def path():
        return "/user:logout"

    def post(self):
        token = request.headers.get("authorization").replace("Bearer ", "")
        return user_repository.logout(token)


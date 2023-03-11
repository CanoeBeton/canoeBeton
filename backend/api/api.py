from typing import Type

from flask import Flask
from flask_cors import CORS
from flask_restful import Api

from api.resource import ApiResource
from api.userController import UserController, LoginController, LogoutController, MeController


app = Flask(__name__)
CORS(app)
api = Api(app)


routes: list[Type[ApiResource]] = [
    UserController,
    LoginController,
    LogoutController,
    MeController
]

for route in routes:
    api.add_resource(route, route.path())

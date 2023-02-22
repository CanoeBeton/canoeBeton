from typing import Type

from flask import Flask
from flask_cors import CORS
from flask_restful import Api

from api.problemController import ProblemsController, NotificationsController
from api.pingController import PingController
from api.resource import ApiResource
from api.taskController import TaskController, TaskIdController
from api.userController import UserController, LoginController, LogoutController, MeController
from api.itemController import LostItemController, FoundItemController


app = Flask(__name__)
CORS(app)
api = Api(app)


routes: list[Type[ApiResource]] = [
    PingController,
    UserController,
    LoginController,
    LogoutController,
    TaskController,
    ProblemsController,
    NotificationsController,
    LostItemController,
    FoundItemController,
    TaskIdController,
    MeController
]

for route in routes:
    api.add_resource(route, route.path())

from typing import Type

from flask import Flask, jsonify
from flask_cors import CORS
from flask_restful import Api

from api.resource import ApiResource
from api.memberController import UserController, UserByIdController
from api.healthContoller import HealthController
from error.NotFoundError import NotFoundError

app = Flask(__name__)
CORS(app)
api = Api(app)


routes: list[Type[ApiResource]] = [
    UserController,
    HealthController,
    UserByIdController
]

for route in routes:
    api.add_resource(route, route.path())

@app.errorhandler(NotFoundError)
def handle_not_found_error(error):
    return jsonify({'error': 'Not found'}), 404

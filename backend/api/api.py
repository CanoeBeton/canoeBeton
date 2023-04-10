from typing import Type

from flask import Flask, jsonify, request, abort
from flask_cors import CORS
from flask_restful import Api

from api.eventController import EventController, EventByIdController
from api.melangeController import MelangeController, MelangeByBoatController
from api.resource import ApiResource
from api.memberController import MemberController, MemberByIdController, MemberByYearController
from api.healthContoller import HealthController
from api.boatController import BoatController, BoatByIdController
from api.partenaireController import PartenaireController, PartenaireByIdController, PartenaireActivateController
from api.tournamentController import TournamentController, TournamentByIdController, TournamentByYearController
from api.yearController import YearController, YearByIdController, YearActivateController
from error.NotFoundError import NotFoundError
from infra.adminRepository import AdminRepository

admin_repository = AdminRepository()

app = Flask(__name__)
CORS(app)
api = Api(app)

routes: list[Type[ApiResource]] = [
    MemberController,
    HealthController,
    MemberByIdController,
    EventController,
    EventByIdController,
    BoatController,
    BoatByIdController,
    PartenaireController,
    PartenaireByIdController,
    TournamentController,
    TournamentByIdController,
    PartenaireActivateController,
    YearController,
    YearByIdController,
    YearActivateController,
    TournamentByYearController,
    MemberByYearController,
    MelangeController,
    MelangeByBoatController
]

for route in routes:
    api.add_resource(route, route.path())

@app.before_request
def before_request():
    tuple = admin_repository.getToken(request.headers.get('token'))
    if tuple is None:
        abort(403)


@app.errorhandler(NotFoundError)
def handle_not_found_error(error):
    return jsonify({'error': 'Not found'}), 404

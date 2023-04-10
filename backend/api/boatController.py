from flask import request, jsonify

from api.resource import ApiResource, checkAdminRight
from domain.boat import BoatRequest
from infra.boatRepository import BoatRepository

boat_repository = BoatRepository()

class BoatController(ApiResource):
    @staticmethod
    def path():
        return "/boat"

    def post(self):
        checkAdminRight()
        boat_json = request.get_json()
        boat_request = BoatRequest(boat_json)
        boat_repository.create(boat_request)
        return jsonify({"success": True})

    def get(self):
        boats = boat_repository.get_all()
        return jsonify(boats.__dict__())

class BoatByIdController(ApiResource):
    @staticmethod
    def path():
        return "/boat/<id>"

    def get(self, id):
        boat = boat_repository.get(id)
        return jsonify(boat.__dict__())

    def put(self, id):
        checkAdminRight()

        boat_json = request.get_json()

        boat_request = BoatRequest(boat_json)

        boat_repository.update(boat_request, id)
        return jsonify({"success": True})

    def delete(self, id):
        checkAdminRight()

        boat_repository.delete(id)
        return jsonify({"success": True})
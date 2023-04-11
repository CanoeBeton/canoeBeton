from flask import request, jsonify

from api.resource import ApiResource, checkAdminRight
from domain.melange import MelangeRequest
from infra.melangeRepository import MelangeRepository

melange_repository = MelangeRepository()

class MelangeController(ApiResource):
    @staticmethod
    def path():
        return "/melange"

    def post(self):
        checkAdminRight()

        melange_json = request.get_json()
        melange_request = MelangeRequest(melange_json)
        melange_repository.create(melange_request)
        return jsonify({"success": True})

    def get(self):
        melanges = melange_repository.get_all()
        return jsonify(melanges.__dict__())

    def put(self):
        checkAdminRight()

        melange_json = request.get_json()
        melange_request = MelangeRequest(melange_json)
        melange_repository.update(melange_request)
        return jsonify({"success": True})

class MelangeByBoatController(ApiResource):
    @staticmethod
    def path():
        return "/melange/<boat_name>"

    def get(self, boat_name):
        melange = melange_repository.getByBoatName(boat_name)
        return jsonify(melange.__dict__())

    def delete(self, boat_name):
        checkAdminRight()

        if request.headers.get('tile') != '':
            melange_repository.delete(boat_name, request.headers.get('tile'))
        else:
            melange_repository.deleteByBoatName(boat_name)

        return jsonify({"success": True})

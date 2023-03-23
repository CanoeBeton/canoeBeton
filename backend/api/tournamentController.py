from flask import request, jsonify

from api.resource import ApiResource
from infra.tournamentRepository import TournamentRepository

tournament_repository = TournamentRepository()

class TournamentController(ApiResource):
    @staticmethod
    def path():
        return "/tournament"

    def post(self):
        tournament_json = request.get_json()
        tournament_repository.create(tournament_json)
        return jsonify({"success": True})

    def get(self):
        tournaments = tournament_repository.get_all()
        return jsonify(tournaments.__dict__())

class TournamentByIdController(ApiResource):
    @staticmethod
    def path():
        return "/tournament/<id>"

    def get(self, id):
        tournament = tournament_repository.get(id)
        return jsonify(tournament.__dict__())

    def put(self, id):
        tournament_json = request.get_json()

        tournament_repository.update(tournament_json, id)
        return jsonify({"success": True})

    def delete(self, id):
        tournament_repository.delete(id)
        return jsonify({"success": True})
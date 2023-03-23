from flask import request, jsonify

from api.resource import ApiResource
from infra.yearRepository import YearRepository

year_repository = YearRepository()

class YearController(ApiResource):
    @staticmethod
    def path():
        return "/year"

    def post(self):
        year_json = request.get_json()
        year_repository.create(year_json)
        return jsonify({"success": True})

    def get(self):
        years = year_repository.get_all()
        return jsonify(years.__dict__())

class YearByIdController(ApiResource):
    @staticmethod
    def path():
        return "/year/<id>"

    def get(self, id):
        year = year_repository.get(id)
        return jsonify(year.__dict__())

    def put(self, id):
        year_json = request.get_json()

        year_repository.update(year_json, id)
        return jsonify({"success": True})

    def delete(self, id):
        year_repository.delete(id)
        return jsonify({"success": True})

class YearActivateController(ApiResource):
    @staticmethod
    def path():
        return "/year/<id>/activate"

    def post(self, id):
        year_repository.activate(id)
        return jsonify({"success": True})
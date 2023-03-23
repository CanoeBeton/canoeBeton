from flask import request, jsonify

from api.resource import ApiResource
from infra.partenaireRepository import PartenaireRepository
from domain.partenaire import PartenaireRequest

partenaireRepository = PartenaireRepository()

class PartenaireController(ApiResource):
    @staticmethod
    def path():
        return "/partenaire"

    def post(self):
        partenaire_json = request.get_json()
        partenaire_request = PartenaireRequest(partenaire_json)
        partenaireRepository.create(partenaire_request)
        return jsonify({"success": True})

    def get(self):
        partenaires = partenaireRepository.get_all()
        return jsonify(partenaires.__dict__())

class PartenaireByIdController(ApiResource):
    @staticmethod
    def path():
        return "/partenaire/<id>"

    def get(self, id):
        partenaire = partenaireRepository.get(id)
        return jsonify(partenaire.__dict__())

    def put(self, id):
        partenaire_json = request.get_json()

        partenaire_request = PartenaireRequest(partenaire_json)

        partenaireRepository.update(partenaire_request, id)
        return jsonify({"success": True})

    def delete(self, id):
        partenaireRepository.delete(id)
        return jsonify({"success": True})

    def activate(self, id):
        partenaireRepository.activate(id)
        return jsonify({"success": True})

    def deactivate(self, id):
        partenaireRepository.deactivate(id)
        return jsonify({"success": True})
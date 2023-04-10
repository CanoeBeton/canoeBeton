from flask import request, jsonify

from api.resource import ApiResource, checkAdminRight
from infra.partenaireRepository import PartenaireRepository
from domain.partenaire import PartenaireRequest, PartenaireResponseList

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
        if request.headers.get('active') == 'true':
            partenaires = partenaireRepository.get_all_active()
            return jsonify(partenaires.__dict__())
        else:
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
        checkAdminRight()

        partenaire_json = request.get_json()

        partenaire_request = PartenaireRequest(partenaire_json)

        partenaireRepository.update(partenaire_request, id)
        return jsonify({"success": True})

    def delete(self, id):
        checkAdminRight()

        partenaireRepository.delete(id)
        return jsonify({"success": True})

class PartenaireActivateController(ApiResource):
    @staticmethod
    def path():
        return "/partenaire/<id>/<activate>"
    def post(self, id, activate):
        checkAdminRight()

        if activate==1:
            return self.partenaireRepository.activate(id)
        elif activate==0:
            return self.partenaireRepository.deactivate(id)
        return jsonify({"success": True})


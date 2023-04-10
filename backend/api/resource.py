from abc import abstractmethod

from flask import abort, request

from infra.adminRepository import AdminRepository
from flask_restful import Resource

admin_repository = AdminRepository()

class ApiResource(Resource):
    @staticmethod
    @abstractmethod
    def path():
        raise RuntimeError("get_url method not implemented!")


def checkAdminRight():
    tuple = admin_repository.getToken(request.headers.get('token'))
    if len(tuple) == 0:
        abort(403)

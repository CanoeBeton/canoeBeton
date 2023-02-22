from abc import abstractmethod

from flask_restful import Resource


class ApiResource(Resource):
    @staticmethod
    @abstractmethod
    def path():
        raise RuntimeError("get_url method not implemented!")

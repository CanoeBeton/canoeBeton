from flask import request, jsonify

from api.resource import ApiResource, checkAdminRight
from infra.yearMemberRepository import YearMemberRepository

year_member_repository = YearMemberRepository()

class YearMemberController(ApiResource):
    @staticmethod
    def path():
        return "/year/<id>/<userId>"

    def post(self, id, userId):
        checkAdminRight()

        year_member_repository.create(id, userId)
        return jsonify({"success": True})

    def delete(self, id, userId):
        checkAdminRight()

        year_member_repository.delete(id, userId)
        return jsonify({"success": True})
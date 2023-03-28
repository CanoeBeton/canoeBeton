from flask import request, jsonify

from api.resource import ApiResource
from domain.member import MemberRequest
from infra.memberRepository import MemberRepository

member_repository = MemberRepository()

class MemberController(ApiResource):
    @staticmethod
    def path():
        return "/member"

    def post(self):
        member_json = request.get_json()
        member_request = MemberRequest(member_json)
        member_repository.create(member_request)
        return jsonify({"success": True})

    def get(self):
        members = member_repository.get_all()
        return jsonify(members.__dict__())

class MemberByIdController(ApiResource):
    @staticmethod
    def path():
        return "/member/<id>"

    def get(self, id):
        member = member_repository.get(id)
        return jsonify(member.__dict__())

    def put(self, id):
        member_json = request.get_json()

        member_request = MemberRequest(member_json)

        member_repository.update(member_request, id)
        return jsonify({"success": True})

    def delete(self, id):
        member_repository.delete(id)
        return jsonify({"success": True})

class MemberByYearController(ApiResource):
    @staticmethod
    def path():
        return "/member/year/<year>"

    def get(self, year):
        members = member_repository.get_by_year(year)
        return jsonify(members.__dict__())
from flask import request, jsonify

from api.resource import ApiResource
from domain.event import EventRequest
from infra.memberRepository import MemberRepository

member_repository = MemberRepository()

class EventController(ApiResource):
    @staticmethod
    def path():
        return "/member"

    def post(self):
        event_json = request.get_json()
        event_request = EventRequest(**event_json)
        member_repository.create(event_request)
        return jsonify({"success": True})

    def get(self):
        members = member_repository.get_all()
        return jsonify(members.__dict__())

class EventByIdController(ApiResource):
    @staticmethod
    def path():
        return "/member/<id>"

    def get(self, id):
        member = member_repository.get(id)
        return jsonify(member.__dict__())

    def put(self, id):
        member = request.get_json()
        member_repository.update(member["name"], member["role"], member["description"], member["image"], id)
        return jsonify({"success": True})

    def delete(self, id):
        member_repository.delete(id)
        return jsonify({"success": True})
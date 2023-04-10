from flask import request, jsonify

from api.resource import ApiResource, checkAdminRight
from domain.event import EventRequest
from infra.eventRepository import EventRepository

event_repository = EventRepository()

class EventController(ApiResource):
    @staticmethod
    def path():
        return "/event"

    def post(self):
        checkAdminRight()

        event_json = request.get_json()
        event_request = EventRequest(**event_json)
        event_repository.create(event_request)
        return jsonify({"success": True})

    def get(self):
        events = event_repository.get_all()
        return jsonify(events.__dict__())

class EventByIdController(ApiResource):
    @staticmethod
    def path():
        return "/event/<id>"

    def get(self, id):
        member = event_repository.get(id)
        return jsonify(member.__dict__())

    def put(self, id):
        checkAdminRight()

        member = request.get_json()
        event_repository.update(member["name"], member["role"], member["description"], member["image"], id)
        return jsonify({"success": True})

    def delete(self, id):
        checkAdminRight()

        event_repository.delete(id)
        return jsonify({"success": True})
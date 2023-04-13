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
        event = event_repository.get(id)
        return jsonify(event.__dict__())

    def put(self, id):
        checkAdminRight()

        event_json = request.get_json()
        event_request = EventRequest(**event_json)

        event_repository.update(event_request, id)
        return jsonify({"success": True})

    def delete(self, id):
        checkAdminRight()

        event_repository.delete(id)
        return jsonify({"success": True})
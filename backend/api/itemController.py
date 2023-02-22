import json

from bson import json_util
from flask import request, make_response, jsonify

from api.resource import ApiResource
from domain.foundItem import FoundItem
from domain.lostItem import LostItem
from infra.foundItemRepository import FoundItemRepository
from infra.lostItemRepository import LostItemRepository

lostItemRepo = LostItemRepository()
foundItemRepo = FoundItemRepository()


def data_to_lost_item(data) -> LostItem:
    return LostItem(data['name'], data['description'], data['lostTime'], data['email'])


def data_to_found_item(data) -> FoundItem:
    return FoundItem(data['name'], data['description'], data['foundTime'])


class LostItemController(ApiResource):
    @staticmethod
    def path():
        return "/lostItem"

    def post(self):
        data = request.get_json()
        try:
            lostItem = data_to_lost_item(data)
        except:
            return "invalid data format"
        lostItemRepo.save(lostItem)
        response = make_response()
        response.status_code = 200
        return response

    def get(self):
        lost_items = lostItemRepo.findAll()
        lost_items_json = json.loads(json_util.dumps(lost_items))
        return lost_items_json

    def put(self):
        data = request.get_json()
        lostItemRepo.envoyerEmail(data['id']["$oid"])

        response = make_response()
        response.status_code = 200
        return response


class FoundItemController(ApiResource):
    @staticmethod
    def path():
        return "/foundItem"

    def post(self):
        data = request.get_json()
        try:
            foundItem = data_to_found_item(data)
        except:
            return "invalid data format"
        foundItemRepo.save(foundItem)

        response = make_response()
        response.status_code = 200
        return response

    def get(self):
        found_items = foundItemRepo.findAll()
        found_items_json = json.loads(json_util.dumps(found_items))
        return found_items_json

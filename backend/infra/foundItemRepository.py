from typing import List

from domain.constants import MONGO_HOST, DB_NAME
from pymongo import MongoClient

from domain.foundItem import FoundItem


client = MongoClient(MONGO_HOST)

class FoundItemRepository:
    def __init__(self):
        database = client[DB_NAME]
        self.foundItem_db = database['foundItem']

    def save(self, foundItem: FoundItem) -> None:
        self.foundItem_db.insert_one(foundItem.__dict__)

    def findAll(self) -> List:
        items = list(self.foundItem_db.find())
        return items

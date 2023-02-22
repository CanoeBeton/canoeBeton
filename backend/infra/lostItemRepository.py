from typing import List

from bson import ObjectId

from domain.constants import MONGO_HOST, DB_NAME
from pymongo import MongoClient
from domain.lostItem import LostItem
from domain.utilitaire import send_email_fr

client = MongoClient(MONGO_HOST)

class LostItemRepository:
    def __init__(self):
        database = client[DB_NAME]
        self.lostItem_db = database['lostItem']

    def save(self, lostItem: LostItem) -> None:
        self.lostItem_db.insert_one(lostItem.__dict__)

    def findAll(self) -> List:
        items = list(self.lostItem_db.find())
        return items

    def envoyerEmail(self, id):
        item = self.lostItem_db.find_one({"_id": ObjectId(id)})
        message = f"<span>Un objet que vous avez perdu a été trouvé. Veuillez vous rendre au centre d'aide au festival pour le retrouver.</span>"
        subject = "Objet trouvé"

        return send_email_fr(message, subject, item['email'])

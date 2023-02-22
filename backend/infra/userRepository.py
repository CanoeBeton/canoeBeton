import hashlib
import uuid

from domain.constants import MONGO_HOST, DB_NAME, SALT
from pymongo import MongoClient
from domain.utilitaire import generate_random_string, send_email_fr
from domain.user import User
import datetime

client = MongoClient(MONGO_HOST)


class UserRepository:
    def __init__(self):
        database = client[DB_NAME]
        self.user_db = database['users']
        self.tokens_db = database['tokens']
        self.salt = SALT

    def get(self, token):
        credentials = self.tokens_db.find_one({
            "token": token
        })

        if not credentials or credentials.get('timestamp') > datetime.datetime.now():
            if credentials and credentials.get('timestamp') > datetime.datetime.now():
                self.tokens_db.delete_one({"token": token})
            return {"error": "Token invalide"}, 400
        else:
            return self.user_db.find_one({"email":credentials['email']})

    def update_mdp(self, password, token):
        hash_password = self.calculate_hashed(password)
        user = self.get(token)
        self.user_db.update_one({"email": user['email']}, {"$set": {"password": hash_password}})

    def create_account(self, userDomaine: User) -> str:
        password = generate_random_string(10)
        hash_password = self.calculate_hashed(password)
        user = {
            "email": userDomaine.email,
            "firstName": userDomaine.firstName,
            "lastName": userDomaine.lastName,
            "type": userDomaine.type,
            "password": hash_password
        }
        self.user_db.insert_one(user)
        message = f"<span>Merci d'avoir été bénévole pour notre événement, {userDomaine.firstName} {userDomaine.lastName}. Veuillez vous connecter à notre plateforme en utilisant les informations de connexion suivantes:\n\nEmail: {userDomaine.email}\nMot de passe: {password}\n\nMerci!</span>"
        subject = "Inscription EventTask"
        return send_email_fr(message, subject, userDomaine.email)

    def get_all_users(self):
        users = list(self.user_db.find())
        return users


    def login(self, email: str, password: str) -> str:
        hashed_password = self.calculate_hashed(password)
        credentials = self.user_db.find_one({
            "email": email,
            "password": hashed_password
        })
        if not credentials:
            return {"error": "Mot de passe invalide"}, 400

        return self.create_token(email)

    def logout(self, token: str):
        self.tokens_db.delete_one({
            "token": token
        }
    )

    def calculate_hashed(self, password):
        dataBase_password = password + self.salt
        return hashlib.md5(dataBase_password.encode()).hexdigest()

    def create_token(self, email) -> str:
        token = uuid.uuid4().__str__()
        user = {
            "email": email,
            "token": token,
            "timestamp": datetime.datetime.now()
        }
        print('here')
        self.tokens_db.insert_one(user)
        print('there')
        print(token)
        print(user)
        return token

    def user_exist(self, email):
        user = self.user_db.find_one({
            "email": email
        })
        if not user:
            return False
        return True

    def is_valide_token(self, token):
        credentials = self.tokens_db.find_one({
            "token": token
        })

        if not credentials or credentials.get('timestamp') > datetime.datetime.now():
            if credentials and credentials.get('timestamp') > datetime.datetime.now():
                self.tokens_db.delete_one({"token": token})
            return False
        else:
            return True

    def get_user_by_id(self, id):
        user = self.user_db.find_one({
            "_id": id
        })
        return user

    def is_notification_read(self, idProblem, token):
        user = self.get(token)

        query = {"email": user["email"], "unreadNotification": {"$in": [idProblem]}}

        something = self.user_db.find_one(query)

        if not something:
            return False
        return True

    def add_notification(self, problemId):

        update = {"$push": {"unreadNotification": problemId}}

        # Update all documents in the collection
        self.user_db.update_many({}, update)

    def read_notifications(self, token):
        user = self.get(token)
        self.user_db.update_many({"email": user["email"]},{"$unset": {"unreadNotification": ""}})

    def is_admin(self, token):
        user = self.get(token)
        return user["type"] == "Organisateur"


from domain.constants import MONGO_HOST, DB_NAME
from pymongo import MongoClient


client = MongoClient(MONGO_HOST)

class ProblemsRepository:
    def __init__(self):
        database = client[DB_NAME]
        self.problem_db = database['problem']

    def create_problem(self, problem):
        problem = {
            "name": problem.name,
            "description": problem.description,
            "type": problem.problemType,
            "userId": problem.userId
        }

        return self.problem_db.insert_one(problem)

    def get_notifications(self):
        notifications = list(self.problem_db.find())
        return notifications

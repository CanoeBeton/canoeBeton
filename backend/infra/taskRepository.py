from typing import List

from bson import ObjectId

from domain.constants import MONGO_HOST, DB_NAME, SALT
from pymongo import MongoClient

from domain.task import Task

client = MongoClient(MONGO_HOST)


class TaskRepository:
    def __init__(self):
        database = client[DB_NAME]
        self.task_db = database['tasks']
        self.salt = SALT

    def save(self, task: Task) -> None:
        self.task_db.insert_one(task.__dict__)

    def findAll(self) -> List:
        tasks = list(self.task_db.find())
        return tasks

    def find(self, userId: str) -> List:
        tasks = list(self.task_db.find({"userId": userId}))
        return tasks


    def delete(self, taskId: str) -> None:
        self.task_db.delete_one({"_id": ObjectId(taskId)})

    def put(self, task: Task, taskId: str) -> None:
        self.task_db.replace_one({"_id": ObjectId(taskId)}, task.__dict__)

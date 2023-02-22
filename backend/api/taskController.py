import json

from bson import json_util
from flask import request

from api.resource import ApiResource
from domain.task import Task
from infra.taskRepository import TaskRepository
from infra.userRepository import UserRepository

user_repository = UserRepository()
task_repository = TaskRepository()


def data_to_task(data) -> Task:
    return Task(data['name'], data['description'], data['startTime'], data['endTime'], data['userId'])


def is_valid_task_format(data):
    try:
        data_to_task(data)
    except:
        return False
    return True


class TaskController(ApiResource):
    @staticmethod
    def path():
        return "/task"

    def post(self):
        if(not user_repository.is_valide_token(request.headers.get("authorization").replace("Bearer ", ""))):
            return {"error": "Token invalide"}, 400

        if(not user_repository.is_admin(request.headers.get("authorization").replace("Bearer ", ""))):
            return {"error": "Vous n'êtes pas admin"}, 400

        data = request.get_json()
        if not is_valid_task_format(data):
            return {'invalid_format': True}
        task_repository.save(data_to_task(data))
        return data

    def get(self):
        if(not user_repository.is_valide_token(request.headers.get("authorization").replace("Bearer ", ""))):
            return {"error": "Token invalide"}, 400

        if(user_repository.is_admin(request.headers.get("authorization").replace("Bearer ", ""))):
            tasks = task_repository.findAll()
        else:
            user = user_repository.get(request.headers.get("authorization").replace("Bearer ", ""))
            tasks = task_repository.find(str(user["_id"]))

        tasks_json = json.loads(json_util.dumps(tasks))
        return tasks_json


class TaskIdController(ApiResource):
    @staticmethod
    def path():
        return "/task/<string:task_id>"

    def delete(self, task_id):
        if(not user_repository.is_valide_token(request.headers.get("authorization").replace("Bearer ", ""))):
            return {"error": "Token invalide"}, 400
        if(not user_repository.is_admin(request.headers.get("authorization").replace("Bearer ", ""))):
            return {"error": "Vous n'êtes pas admin"}, 400

        task_repository.delete(task_id)
        return f"Task {task_id} deleted"

    def put(self, task_id):
        if(not user_repository.is_valide_token(request.headers.get("authorization").replace("Bearer ", ""))):
            return {"error": "Token invalide"}, 400
        if(not user_repository.is_admin(request.headers.get("authorization").replace("Bearer ", ""))):
            return {"error": "Vous n'êtes pas admin"}, 400
        data = request.get_json()
        if is_valid_task_format(data):
            task_repository.put(data_to_task(data), task_id)
        else:
            return 'invalid data format'
        return f"Task {task_id} modified with data: {data}"

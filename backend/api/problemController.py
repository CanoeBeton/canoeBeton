from flask import request, jsonify

from api.resource import ApiResource
from infra.problemsRepository import ProblemsRepository
from domain.problem import Problem
from infra.userRepository import UserRepository
from infra.problemsRepository import ProblemsRepository

user_repository = UserRepository()
problem_repository = ProblemsRepository()


class ProblemsController(ApiResource):
    @staticmethod
    def path():
        return "/problem"

    def post(self):
        if(not user_repository.is_valide_token(request.headers.get("authorization").replace("Bearer ", ""))):
            return {"error": "Token invalide"}, 400

        data = request.get_json()
        problem = Problem(data['name'], data['description'], data['type'], user_repository.get(request.headers.get("authorization").replace("Bearer ", ""))["_id"])
        bdProblem = problem_repository.create_problem(problem)
        user_repository.add_notification(bdProblem.inserted_id)
        return {"message": "Problem created"}, 200


class NotificationsController(ApiResource):
    @staticmethod
    def path():
        return "/notifications"

    def get(self):
        if(request.headers.get("authorization") and not user_repository.is_valide_token(request.headers.get("authorization").replace("Bearer ", ""))):
            return {"error": "Token invalide"}, 400

        notifications = problem_repository.get_notifications()
        transformed_notifications = []
        for notification in notifications:
            user = user_repository.get_user_by_id(notification["userId"])
            transformed_problem = {
                "name": notification["name"],
                "description": notification["description"],
                "type": notification["type"],
                "userFirstName": user["firstName"],
                "userLastName": user["lastName"],
                "read": user_repository.is_notification_read(notification["_id"], request.headers.get("authorization").replace("Bearer ", ""))
            }
            transformed_notifications.append(transformed_problem)

        user_repository.read_notifications(request.headers.get("authorization").replace("Bearer ", ""))
        return transformed_notifications


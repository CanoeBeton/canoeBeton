from time import time


class Task:
    def __init__(self, name: str, description: str, startTime: time, endTime: time, userId: int):
        self.name = name
        self.description = description
        self.startTime = startTime
        self.endTime = endTime
        self.userId = userId

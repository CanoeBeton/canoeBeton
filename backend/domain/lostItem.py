from time import time

class LostItem:
    def __init__(self, name: str, description: str, lostTime: time, email: str):
        self.name = name
        self.description = description
        self.lostTime = lostTime
        self.email = email

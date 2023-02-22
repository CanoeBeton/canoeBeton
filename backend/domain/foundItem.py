from time import time


class FoundItem:
    def __init__(self, name: str, description: str, foundTime: time):
        self.name = name
        self.description = description
        self.foundTime = foundTime

from domain.problemType import ProblemType


class Problem:
    def __init__(self, name: str, description: str, problemType: ProblemType, userId: int):
        self.name = name
        self.description = description
        self.problemType = problemType
        self.userId = userId
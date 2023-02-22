from domain.userType import UserType


class User:
    def __init__(self, userType: UserType, firstName: str, lastName: str, email: str):
        self.type = userType
        self.firstName = firstName
        self.lastName = lastName
        self.email = email

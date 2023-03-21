class MemberRequest:
    def __init__(self, name, description, role, image):
        self.name = name
        self.description = description
        self.role = role
        self.image = image

class MemberResponse:
    def __init__(self, tuple):
        self.id = tuple[0]
        self.name = tuple[1]
        self.role = tuple[2]
        self.description = tuple[3]
        self.image = tuple[4]

    def __dict__(self):
        dict_obj = {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "role": self.role,
            "image": self.image.decode('utf-8')
        }
        return dict_obj


class MemberResponseList:
    def __init__(self, list):
        self.list = list

    def __dict__(self):
        dict_list = []
        for tuple in self.list:
            dict_list.append(MemberResponse(tuple).__dict__())
        return dict_list
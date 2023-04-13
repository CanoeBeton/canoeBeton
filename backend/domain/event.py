class EventRequest:
    def __init__(self,id, name, begin_date, end_date, description, image):
        self.id = id
        self.name = name
        self.begin_date = begin_date
        self.end_date = end_date
        self.description = description
        self.image = image

class EventResponse:
    def __init__(self, tuple):
        self.id = tuple[0]
        self.name = tuple[1]
        self.begin_date = tuple[2]
        self.end_date = tuple[3]
        self.description = tuple[4]
        self.image = tuple[5].decode('utf-8')

    def __dict__(self):
        dict_obj = {
            "id": self.id,
            "name": self.name,
            "begin_date": self.begin_date,
            "end_date": self.end_date,
            "description": self.description,
            "image": self.image
        }
        return dict_obj


class EventResponseList:
    def __init__(self, list):
        self.list = list

    def __dict__(self):
        dict_list = []
        for tuple in self.list:
            dict_list.append(EventResponse(tuple).__dict__())
        return dict_list
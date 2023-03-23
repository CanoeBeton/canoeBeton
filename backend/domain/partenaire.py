# CREATE TABLE partenaires (
#     name varchar(255) NOT NULL,
#     description TEXT NOT NULL,
#     active tinyint(1) NOT NULL DEFAULT '0',
#     type enum('bronze', 'argent', 'or', 'platinium') NOT NULL DEFAULT 'bronze',
#     image BLOB,
#     PRIMARY KEY (name)
# );

class PartenaireRequest:
    def __init__(self, partenaire_json):
        self.name = partenaire_json['name']
        self.description = partenaire_json['description']
        self.type = partenaire_json['type']
        self.image = partenaire_json['image']

class PartenaireResponse:
    def __init__(self, tuple):
        self.name = tuple[0]
        self.description = tuple[1]
        self.type = tuple[2]
        self.image = tuple[3]
        self.active = tuple[4]

    def __dict__(self):
        dict_obj = {
            "name": self.name,
            "description": self.description,
            "type": self.type,
            "image": self.image,
            "active": self.active,
        }
        return dict_obj

class PartenaireResponseList:
    def __init__(self, list):
        self.list = list

    def __dict__(self):
        dict_list = []
        for tuple in self.list:
            dict_list.append(PartenaireResponse(tuple).__dict__())
        return dict_list
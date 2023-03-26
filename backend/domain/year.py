class YearRequest:
    def __init__(self, year_json):
        self.year = year_json["year"]
        self.boat_name = year_json["boat_name"]
        self.partenaire_mosaique = year_json["partenaire_mosaique"]
        self.icone = year_json["icone"]

class YearResponse:
    def __init__(self, tuple):
        self.year = tuple[0]
        self.boat_name = tuple[1]
        self.partenaire_mosaique = tuple[2]
        self.active = tuple[3]
        self.icone = tuple[4]

    def __dict__(self):
        dict_obj = {
            "year": self.year,
            "boat_name": self.boat_name,
            "partenaire_mosaique": self.partenaire_mosaique.decode('utf-8'),
            "active": self.active,
            "icone": self.icone.decode('utf-8')
        }
        return dict_obj


class YearResponseList:
    def __init__(self, list):
        self.list = list

    def __dict__(self):
        dict_list = []
        for tuple in self.list:
            dict_list.append(YearResponse(tuple).__dict__())
        return dict_list
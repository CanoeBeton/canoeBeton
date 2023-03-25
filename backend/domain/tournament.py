class TournamentRequest:
    def __init__(self, tournament_json):
        self.name = tournament_json['name']
        self.year = tournament_json['year']
        self.position = tournament_json['position']
        self.localisation = tournament_json['localisation']
        self.description = tournament_json['description']
        self.date = tournament_json['date']

class TournamentResponse:
    def __init__(self, tuple):
        self.id = tuple[0]
        self.name = tuple[1]
        self.year = tuple[2]
        self.position = tuple[3]
        self.localisation = tuple[4]
        self.description = tuple[5]
        self.date = tuple[6]

    def __dict__(self):
        return {
            'id': self.id,
            'name': self.name,
            'year': self.year,
            'position': self.position,
            'localisation': self.localisation,
            'description': self.description,
            'date': self.date
        }

class TournamentResponseList:
    def __init__(self, list):
        self.list = list

    def __dict__(self):
        dict_list = []
        for tuple in self.list:
            dict_list.append(TournamentResponse(tuple).__dict__())
        return dict_list
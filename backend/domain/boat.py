class BoatRequest:
    def __init__(self, boat_json):
        self.name = boat_json["name"]
        self.poids = boat_json["poids"]
        self.longueur = boat_json["longueur"]
        self.largeur = boat_json["largeur"]
        self.profondeur = boat_json["profondeur"]
        self.epaisseur = boat_json["epaisseur"]
        self.couleur_exterieure = boat_json["couleur_exterieure"]
        self.couleur_interieure = boat_json["couleur_interieure"]
        self.renforcement = boat_json["renforcement"]

class BoatResponse:
    def __init__(self, tuple):
        self.name = tuple[0]
        self.poids = tuple[1]
        self.longueur = tuple[2]
        self.largeur = tuple[3]
        self.profondeur = tuple[4]
        self.epaisseur = tuple[5]
        self.couleur_exterieure = tuple[6]
        self.couleur_interieure = tuple[7]
        self.renforcement = tuple[8]

    def __dict__(self):
        dict_obj = {
            "name": self.name,
            "poids": self.poids,
            "longueur": self.longueur,
            "largeur": self.largeur,
            "profondeur": self.profondeur,
            "epaisseur": self.epaisseur,
            "couleur_exterieure": self.couleur_exterieure,
            "couleur_interieure": self.couleur_interieure,
            "renforcement": self.renforcement,
        }
        return dict_obj

class BoatResponseList:
    def __init__(self, list):
        self.list = list

    def __dict__(self):
        dict_list = []
        for tuple in self.list:
            dict_list.append(BoatResponse(tuple).__dict__())
        return dict_list

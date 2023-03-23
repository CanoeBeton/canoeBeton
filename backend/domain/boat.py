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
        self.masse_volumique_seche_1 = boat_json["masse_volumique_seche_1"]
        self.resistance_compression_1 = boat_json["resistance_compression_1"]
        self.resistance_tension_1 = boat_json["resistance_tension_1"]
        self.module_young_1 = boat_json["module_young_1"]
        self.masse_volumique_seche_2 = boat_json["masse_volumique_seche_2"]
        self.resistance_compression_2 = boat_json["resistance_compression_2"]
        self.resistance_tension_2 = boat_json["resistance_tension_2"]
        self.module_young_2 = boat_json["module_young_2"]
        self.masse_volumique_seche_3 = boat_json["masse_volumique_seche_3"]
        self.resistance_compression_3 = boat_json["resistance_compression_3"]
        self.resistance_tension_3 = boat_json["resistance_tension_3"]
        self.module_young_3 = boat_json["module_young_3"]

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
        self.masse_volumique_seche_1 = tuple[9]
        self.resistance_compression_1 = tuple[10]
        self.resistance_tension_1 = tuple[11]
        self.module_young_1 = tuple[12]
        self.masse_volumique_seche_2 = tuple[13]
        self.resistance_compression_2 = tuple[14]
        self.resistance_tension_2 = tuple[15]
        self.module_young_2 = tuple[16]
        self.masse_volumique_seche_3 = tuple[17]
        self.resistance_compression_3 = tuple[18]
        self.resistance_tension_3 = tuple[19]
        self.module_young_3 = tuple[20]

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
            "masse_volumique_seche_1": self.masse_volumique_seche_1,
            "resistance_compression_1": self.resistance_compression_1,
            "resistance_tension_1": self.resistance_tension_1,
            "module_young_1": self.module_young_1,
            "masse_volumique_seche_2": self.masse_volumique_seche_2,
            "resistance_compression_2": self.resistance_compression_2,
            "resistance_tension_2": self.resistance_tension_2,
            "module_young_2": self.module_young_2,
            "masse_volumique_seche_3": self.masse_volumique_seche_3,
            "resistance_compression_3": self.resistance_compression_3,
            "resistance_tension_3": self.resistance_tension_3,
            "module_young_3": self.module_young_3
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

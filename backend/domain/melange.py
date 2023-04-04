class MelangeRequest:
    def __init__(self, melange_json):
        self.boat_name = melange_json["boat_name"]
        self.title = melange_json["title"]
        self.masse_volumique_seche = melange_json["masse_volumique_seche"]
        self.resistance_compression = melange_json["resistance_compression"]
        self.resistance_tension = melange_json["resistance_tension"]
        self.module_young = melange_json["module_young"]

class MelangeResponse:
    def __init__(self, tuple):
        self.boat_name = tuple[0]
        self.title = tuple[1]
        self.masse_volumique_seche = tuple[2]
        self.resistance_compression = tuple[3]
        self.resistance_tension = tuple[4]
        self.module_young = tuple[5]

    def __dict__(self):
        dict_obj = {
            "boat_name": self.boat_name,
            "title": self.title,
            "masse_volumique_seche": self.masse_volumique_seche,
            "resistance_compression": self.resistance_compression,
            "resistance_tension": self.resistance_tension,
            "module_young": self.module_young,
        }
        return dict_obj

class MelangeResponseList:
    def __init__(self, list):
        self.list = list

    def __dict__(self):
        dict_list = []
        for tuple in self.list:
            dict_list.append(MelangeResponse(tuple).__dict__())
        return dict_list
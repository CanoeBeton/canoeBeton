from domain.boat import BoatRequest, BoatResponse, BoatResponseList
from infra.connection import Connection

class BoatRepository:
    TABLE = "boats"

    def __init__(self):
        self.connection = Connection()

    def create(self, boat: BoatRequest):
        self.connection.change(f'INSERT INTO {self.TABLE} (name, poids, longueur, largeur, profondeur, epaisseur, couleur_exterieure, couleur_interieure, reinforcement, masse_volumique_seche_1, resistance_compression_1, resistance_tension_1, module_young_1, masse_volumique_seche_2, resistance_compression_2, resistance_tension_2, module_young_2, masse_volumique_seche_3, resistance_compression_3, resistance_tension_3, module_young_3) VALUES ("{boat.name}", {boat.poids}, {boat.longueur}, {boat.largeur}, {boat.profondeur}, {boat.epaisseur}, "{boat.couleur_exterieure}", "{boat.couleur_interieure}", "{boat.renforcement}", {boat.masse_volumique_seche_1}, {boat.resistance_compression_1}, {boat.resistance_tension_1}, {boat.module_young_1}, {boat.masse_volumique_seche_2}, {boat.resistance_compression_2}, {boat.resistance_tension_2}, {boat.module_young_2}, {boat.masse_volumique_seche_3}, {boat.resistance_compression_3}, {boat.resistance_tension_3}, {boat.module_young_3})')

    def get(self, name: str) -> BoatResponse:
        result = self.connection.get(f'SELECT * FROM {BoatRepository.TABLE} WHERE name = "{name}"')
        return BoatResponse(result[0])

    def get_all(self) -> BoatResponseList:
        result = self.connection.get(f'SELECT * FROM {BoatRepository.TABLE}')
        return BoatResponseList(result)

    def update(self, boat: BoatRequest, name:str):
        self.connection.change(f'UPDATE {BoatRepository.TABLE} SET poids = "{boat.poids}", longueur = "{boat.longueur}", largeur = "{boat.largeur}", profondeur = "{boat.profondeur}", epaisseur = "{boat.epaisseur}", couleur_exterieure = "{boat.couleur_exterieure}", couleur_interieure = "{boat.couleur_interieure}", renforcement = "{boat.renforcement}" WHERE name = "{name}"')

    def delete(self, name: str):
        self.connection.change(f'DELETE FROM {BoatRepository.TABLE} WHERE name = "{name}"')


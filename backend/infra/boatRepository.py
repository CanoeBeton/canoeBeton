from domain.boat import BoatRequest, BoatResponse, BoatResponseList
from infra.connection import Connection

class BoatRepository:
    TABLE = "boats"

    def __init__(self):
        self.connection = Connection()

    def create(self, boat: BoatRequest):
        self.connection.change(f'INSERT INTO {self.TABLE} (name, poids, longueur, largeur, profondeur, epaisseur, couleur_exterieure, couleur_interieure, renforcement) VALUES ("{boat.name}", "{boat.poids}", "{boat.longueur}", "{boat.largeur}", "{boat.profondeur}", "{boat.epaisseur}", "{boat.couleur_exterieure}", "{boat.couleur_interieure}", "{boat.renforcement}")')

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


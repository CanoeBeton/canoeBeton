from domain.melange import MelangeRequest, MelangeResponseList
from infra.connection import Connection

class MelangeRepository:
    TABLE = 'melanges'

    def __init__(self):
        self.connection = Connection()

    def create(self, melange: MelangeRequest):
        self.connection.change(f'INSERT INTO {self.TABLE} (boat_name, title, masse_volumique_seche, resistance_compression, resistance_tension, module_young) VALUES ("{melange.boat_name}", "{melange.title}", "{melange.masse_volumique_seche}", "{melange.resistance_compression}", "{melange.resistance_tension}", "{melange.module_young}")')

    def getByBoatName(self, boat_name: str) -> MelangeResponseList:
        result = self.connection.get(f'SELECT * FROM {self.TABLE} WHERE boat_name = "{boat_name}"')
        return MelangeResponseList(result)

    def deleteByBoatName(self, boat_name: str):
        self.connection.change(f'DELETE FROM {self.TABLE} WHERE boat_name = "{boat_name}"')

    def delete(self, boat_name: str, title: str):
        self.connection.change(f'DELETE FROM {self.TABLE} WHERE boat_name = "{boat_name}" and title = "{title}"')

    def update(self, melange: MelangeRequest):
        self.connection.change(f'UPDATE {self.TABLE} SET masse_volumique_seche = "{melange.masse_volumique_seche}", resistance_compression = "{melange.resistance_compression}", resistance_tension = "{melange.resistance_tension}", module_young = "{melange.module_young}" WHERE boat_name = "{melange.boat_name}" and title = "{melange.title}"')
from domain.year import YearRequest, YearResponse, YearResponseList
from infra.connection import Connection

class YearRepository:
    TABLE= "years"

    def __init__(self):
        self.connection = Connection()

    def create(self, year: YearRequest):
        self.connection.change(f'INSERT INTO {YearRepository.TABLE} (year, boat_name, partenaire_mosaique) VALUES ("{year.year}", "{year.boat_name}", "{year.partenaire_mosaique}")')

    def get(self, id) -> YearResponse:
        tuple = self.connection.get(f'SELECT * FROM {YearRepository.TABLE} WHERE id = {id}')
        return YearResponse(tuple[0])

    def get_all(self) -> YearResponseList:
        return YearResponseList(self.connection.get(f'SELECT * FROM {YearRepository.TABLE}'))

    def update(self, year: YearRequest, id):
        self.connection.change(f'UPDATE {YearRepository.TABLE} SET year = "{year.year}", boat_name = "{year.boat_name}", partenaire_mosaique = "{year.partenaire_mosaique}" WHERE id = {id}')

    def delete(self, id):
        self.connection.change(f'DELETE FROM {YearRepository.TABLE} WHERE id = {id}')

    def activate(self, id):
        self.connection.change(f'UPDATE {YearRepository.TABLE} SET active = {0}')
        self.connection.change(f'UPDATE {YearRepository.TABLE} SET active = {1} WHERE id = {id}')

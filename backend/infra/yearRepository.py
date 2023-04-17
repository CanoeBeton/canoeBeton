from domain.year import YearRequest, YearResponse, YearResponseList
from infra.connection import Connection

class YearRepository:
    TABLE= "years"

    def __init__(self):
        self.connection = Connection()

    def create(self, year: YearRequest):
        self.connection.change(f'INSERT INTO {YearRepository.TABLE} (year, boat_name, partenaire_mosaique, icone) VALUES ({year.year}, "{year.boat_name}", "{year.partenaire_mosaique}", "{year.icone}")')

    def get(self, yearNumber) -> YearResponse:
        tuple = self.connection.get(f'SELECT * FROM {YearRepository.TABLE} WHERE year = {yearNumber}')
        return YearResponse(tuple[0])

    def get_all(self) -> YearResponseList:
        return YearResponseList(self.connection.get(f'SELECT * FROM {YearRepository.TABLE}'))

    def update(self, year: YearRequest, yearNumber):
        self.connection.change(f'UPDATE {YearRepository.TABLE} SET boat_name = "{year.boat_name}", partenaire_mosaique = "{year.partenaire_mosaique}", icone="{year.icone}" WHERE year = {yearNumber}')

    def delete(self, yearNumber):
        self.connection.change(f'DELETE FROM {YearRepository.TABLE} WHERE year = {yearNumber}')

    def activate(self, yearNumber):
        self.connection.change(f'UPDATE {YearRepository.TABLE} SET active = {0}')
        self.connection.change(f'UPDATE {YearRepository.TABLE} SET active = {1} WHERE year = {yearNumber}')

    def get_active(self) -> YearResponse:
        tuple = self.connection.get(f'SELECT * FROM {YearRepository.TABLE} WHERE active = 1')
        return YearResponse(tuple[0])
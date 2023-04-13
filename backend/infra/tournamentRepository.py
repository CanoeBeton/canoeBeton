from domain.tournament import TournamentRequest, TournamentResponse, TournamentResponseList
from infra.connection import Connection


class TournamentRepository:
    TABLE= "tournaments"

    def __init__(self):
        self.connection = Connection()

    def create(self, tournament: TournamentRequest):
        self.connection.change(f'INSERT INTO {TournamentRepository.TABLE} (name, begin_date, end_date, description, image) VALUES ("{tournament.name}", "{tournament.begin_date}", "{tournament.end_date}", "{tournament.description}", "{tournament.image}")')

    def get(self, id) -> TournamentResponse:
        tuple = self.connection.get(f'SELECT * FROM {TournamentRepository.TABLE} WHERE id = {id}')
        return TournamentResponse(tuple[0])

    def get_all(self) -> TournamentResponseList:
        return TournamentResponseList(self.connection.get(f'SELECT * FROM {TournamentRepository.TABLE}'))

    def update(self, tournament, id):
        name = tournament['name']
        date = tournament['date']
        description = tournament['description']
        position = tournament['position']
        localisation = tournament['localisation']

        self.connection.change(f'UPDATE {TournamentRepository.TABLE} SET name = "{name}", date = "{date}", description = "{description}", position = "{position}", localisation = "{localisation}"  WHERE id = {id}')

    def delete(self, id):
        self.connection.change(f'DELETE FROM {TournamentRepository.TABLE} WHERE id = {id}')

    def get_by_year(self, year):
        return TournamentResponseList(self.connection.get(f'SELECT * FROM {TournamentRepository.TABLE} WHERE year = {year}'))

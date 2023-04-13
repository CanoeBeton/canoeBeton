from domain.partenaire import PartenaireResponse, PartenaireResponseList
from infra.connection import Connection


class PartenaireRepository:
    TABLE = "partenaires"

    def __init__(self):
        self.connection = Connection()

    def create(self, partenaire):
        self.connection.change(f'INSERT INTO {PartenaireRepository.TABLE} (name, description, type, image) VALUES ("{partenaire.name}", "{partenaire.description}" , "{partenaire.type}",  "{partenaire.image}")')

    def get(self, name) -> PartenaireResponse:
        tuple = self.connection.get(f'SELECT * FROM {PartenaireRepository.TABLE} WHERE name = "{name}"')
        return PartenaireResponse(tuple[0])

    def get_all(self) -> PartenaireResponseList:
        return PartenaireResponseList(self.connection.get(f'SELECT * FROM {PartenaireRepository.TABLE}'))

    def update(self, partenaire, name):
        self.connection.change(f'UPDATE {PartenaireRepository.TABLE} SET name = "{partenaire.name}", description = "{partenaire.description}", type = "{partenaire.type}", image = "{partenaire.image}" WHERE name = "{name}"')

    def delete(self, name):
        self.connection.change(f'DELETE FROM {PartenaireRepository.TABLE} WHERE name = "{name}"')

    def activate(self, name):
        self.connection.change(f'UPDATE {PartenaireRepository.TABLE} SET active = 1 WHERE name = "{name}"')

    def deactivate(self, name):
        self.connection.change(f'UPDATE {PartenaireRepository.TABLE} SET active = 0 WHERE name = "{name}"')

    def get_all_active(self) -> PartenaireResponseList:
        return PartenaireResponseList(self.connection.get(f'SELECT * FROM {PartenaireRepository.TABLE} WHERE active = 1'))
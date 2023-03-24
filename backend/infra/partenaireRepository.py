from domain.partenaire import PartenaireResponse, PartenaireResponseList
from infra.connection import Connection


class PartenaireRepository:
    TABLE = "partenaires"

    def __init__(self):
        self.connection = Connection()

    def create(self, partenaire):
        self.connection.change(f'INSERT INTO {PartenaireRepository.TABLE} (name, description, type, image) VALUES ("{partenaire.name}", "{partenaire.description}" , "{partenaire.type}",  "{partenaire.image}")')

    def get(self, id) -> PartenaireResponse:
        tuple = self.connection.get(f'SELECT * FROM {PartenaireRepository.TABLE} WHERE id = {id}')
        return PartenaireResponse(tuple[0])

    def get_all(self) -> PartenaireResponseList:
        return PartenaireResponseList(self.connection.get(f'SELECT * FROM {PartenaireRepository.TABLE}'))

    def update(self, partenaire, partenaire_id):
        self.connection.change(f'UPDATE {PartenaireRepository.TABLE} SET name = "{partenaire.name}", description = "{partenaire.description}", type = "{partenaire.type}", image = "{partenaire.image}" WHERE id = {partenaire_id}')

    def delete(self, id):
        self.connection.change(f'DELETE FROM {PartenaireRepository.TABLE} WHERE id = {id}')

    def activate(self, id):
        self.connection.change(f'UPDATE {PartenaireRepository.TABLE} SET active = 1 WHERE id = {id}')

    def deactivate(self, id):
        self.connection.change(f'UPDATE {PartenaireRepository.TABLE} SET active = 0 WHERE id = {id}')

    def get_all_active(self) -> PartenaireResponseList:
        return PartenaireResponseList(self.connection.get(f'SELECT * FROM {PartenaireRepository.TABLE} WHERE active = 1'))
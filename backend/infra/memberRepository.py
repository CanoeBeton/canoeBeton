from domain.member import MemberRequest
from infra.connection import Connection
from domain.member import MemberResponse
from domain.member import MemberResponseList

class MemberRepository:
    TABLE = "members"

    def __init__(self):
        self.connection = Connection()
    def create(self, member: MemberRequest):
        self.connection.change(f'INSERT INTO {MemberRepository.TABLE} (name, role, description, image) VALUES ("{member.name}", "{member.role}" , "{member.description}",  "{member.image}")')

    def get(self, id) -> MemberResponse:
        tuple = self.connection.get(f'SELECT * FROM {MemberRepository.TABLE} WHERE id = {id}')
        return MemberResponse(tuple[0])

    def get_all(self) -> MemberResponseList:
        return MemberResponseList(self.connection.get(f'SELECT * FROM {MemberRepository.TABLE}'))

    def update(self, member, member_id):
        self.connection.change(f'UPDATE {MemberRepository.TABLE} SET name = "{member.name}", role = "{member.role}", description = "{member.description}", image = "{member.image}" WHERE id = {member_id}')

    def delete(self, id):
        self.connection.change(f'DELETE FROM {MemberRepository.TABLE} WHERE id = {id}')

    def get_by_year(self, year):
        return MemberResponseList(self.connection.get(f'SELECT * FROM {MemberRepository.TABLE} WHERE id IN (SELECT member_id FROM years_members WHERE year = {year})'))
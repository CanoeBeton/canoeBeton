from domain.member import MemberRequest
from infra.connection import Connection
from domain.member import MemberResponse
from domain.member import MemberResponseList

class MemberRepository:
    TABLE = "members"

    def __init__(self):
        self.connection = Connection()
    def create_member(self, member: MemberRequest):
        self.connection.change(f'INSERT INTO {MemberRepository.TABLE} (name, role, description, image_path) VALUES ("{member.name}", "{member.role}" , "{member.description}",  "{member.image_path}")')

    def get_member(self, id) -> MemberResponse:
        tuple = self.connection.get(f'SELECT * FROM {MemberRepository.TABLE} WHERE id = {id}')
        return MemberResponse(tuple[0])

    def get_all_members(self) -> MemberResponseList:
        return MemberResponseList(self.connection.get(f'SELECT * FROM {MemberRepository.TABLE}'))

    def update_member(self, member, member_id):
        self.connection.change(f'UPDATE {MemberRepository.TABLE} SET name = {member.name}, role = {member.role}, description = {member.description} image_path = {member.image_path} WHERE id = {member_id}')

    def delete_member(self, id):
        self.connection.change(f'DELETE FROM {MemberRepository.TABLE} WHERE id = {id}')
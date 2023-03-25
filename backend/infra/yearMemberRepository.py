from infra.connection import Connection


class YearMemberRepository:
    TABLE = "year_members"

    def __init__(self):
        self.connection = Connection()

    def create(self, year, member_id):
        self.connection.change(f'INSERT INTO {YearMemberRepository.TABLE} (year, member_id) VALUES ({year}, {member_id})')

    def delete(self, year, member_id):
        self.connection.change(f'DELETE FROM {YearMemberRepository.TABLE} WHERE year = {year} AND member_id = {member_id}')
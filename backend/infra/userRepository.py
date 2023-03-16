from domain.user import UserRequest
from infra.connection import Connection
class UserRepository:
    TABLE = "users"

    def __init__(self):
        self.connection = Connection()
    def create_user(self, user: UserRequest):
        self.connection.change(f'INSERT INTO {UserRepository.TABLE} (name, role, description, image_path) VALUES ("{user.name}", "{user.role}" , "{user.description}",  "{user.image_path}")')

    def get_user(self, id):
        return self.connection.get(f'SELECT * FROM {UserRepository.TABLE} WHERE id = {id}')

    def get_all_users(self):
        return self.connection.get(f'SELECT * FROM {UserRepository.TABLE}')

    def update_user(self, user, user_id):
        self.connection.change(f'UPDATE {UserRepository.TABLE} SET name = {user.name}, role = {user.role}, description = {user.description} image_path = {user.image_path} WHERE id = {user_id}')

    def delete_user(self, id):
        self.connection.change(f'DELETE FROM {UserRepository.TABLE} WHERE id = {id}')
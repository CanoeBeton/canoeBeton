from domain.user import UserRequest
from infra.connection import Connection
class UserRepository:
    def create_user(self, user: UserRequest):
        Connection = Connection()
        Connection.exexecute("INSERT INTO user (name, role, description, image) VALUES ('" + user.name + "', '" + user.role + "', '" + user.description + "', '" + user.image + "')")

    def get_user(self, id):
        return Connection.exexecute("SELECT * FROM user WHERE id = " + id)

    def get_all_users(self):
        return Connection.exexecute("SELECT * FROM user")

    def update_user(self, user, user_id):
        Connection.exexecute("UPDATE user SET name = '" + user.name + "', role = '" + user.role + "', description = '" + user.description + "', image = '" + user.image + "' WHERE id = " + user_id)
        
    def delete_user(self, id):
        Connection.exexecute("DELETE FROM user WHERE id = " + id)
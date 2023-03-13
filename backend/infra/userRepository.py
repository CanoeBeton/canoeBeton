import mysql.connector
import connection
class UserRepository:
    def create_user(self, user):
        connection.exexecute("INSERT INTO user (name, role, description, image) VALUES ('" + user.name + "', '" + user.role + "', '" + user.description + "', '" + user.image + "')")

    def get_user(self, id):
        return connection.exexecute("SELECT * FROM user WHERE id = " + id)

    def get_all_users(self):
        return connection.exexecute("SELECT * FROM user")

    def update_user(self, user, user_id):
        connection.exexecute("UPDATE user SET name = '" + user.name + "', role = '" + user.role + "', description = '" + user.description + "', image = '" + user.image + "' WHERE id = " + user_id)
        
    def delete_user(self, id):
        connection.exexecute("DELETE FROM user WHERE id = " + id)
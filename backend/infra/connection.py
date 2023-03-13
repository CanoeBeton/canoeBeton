import mysql.connector
class connection:
    def getConnection(self):
        return mysql.connector.connect(host="localhost", user="root", password="")

    def execute(self, query):
        return self.getConnection().cursor().execute(query)
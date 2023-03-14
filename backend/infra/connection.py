import mysql.connector

class Connection:
    def __init__(self):
        self.connection = self.getConnection()

    def getConnection(self):
        return mysql.connector.connect(host="localhost", user="root", password="")

    def execute(self, query):
        return self.getConnection().cursor().execute(query)

import mysql.connector

class Connection:

    def __init__(self):
        self.connector = mysql.connector.connect(host="localhost", user="root", password="1234", database="canoe")
        self.cursor = self.connector.cursor()
    def __del__(self):
        self.cursor.close()
        self.connector.close()

    def connecte(self):
        self.connector = mysql.connector.connect(host="localhost", user="root", password="1234", database="canoe")
        self.cursor = self.connector.cursor()

    def deconnecte(self):
        self.cursor.close()
        self.connector.close()

    def change(self, query):
        self.connecte()
        try:
            self.cursor.execute(query)
            self.connector.commit()
        except Exception as e:
            self.connector.rollback()
            self.deconnecte()
            raise e

    def get(self, query):
        self.connecte()
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        self.deconnecte()
        return result

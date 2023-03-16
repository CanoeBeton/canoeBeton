import mysql.connector

class Connection:

    def __init__(self):
        self.connector = mysql.connector.connect(host="localhost", user="root", password="1234", database="canoe")
        self.cursor = self.connector.cursor()
    def __del__(self):
        self.cursor.close()
        self.connector.close()

    def change(self, query):
        try:
            self.cursor.execute(query)
            self.connector.commit()
        except Exception as e:
            self.connector.rollback()
            raise e

    def get(self, query):
        try:
            self.cursor.execute(query)
            return self.cursor.fetchall()
        except Exception as e:
            raise e
import string
import hashlib
import secrets

from infra.connection import Connection

class AdminRepository:
    TABLE = "admins"
    SALT = "REALLY_CLEAVER_SALT"

    def __init__(self):
        self.connection = Connection()

    def create(self, email: string, password: string):
        passwordHash = hashlib.sha256(f'{password}{AdminRepository.SALT}').hexdigest()
        self.connection.change(f'INSERT INTO {AdminRepository.TABLE} (email, password) VALUES ("{email}", "{passwordHash}")')

    def login(self, email: string, password: string) -> string:
        encodedPassword = (password + AdminRepository.SALT)
        encodedPassword = encodedPassword.encode('utf-8')
        passwordHash = hashlib.sha256(encodedPassword).hexdigest()
        result = self.connection.get(f'SELECT * FROM {AdminRepository.TABLE} WHERE email = "{email}" AND password = "{passwordHash}"')

        if( len(result) == 1 ):
            return self.createToken(email)
        else:
            return ""

    def createToken(self, email: string) -> string:
        token = secrets.token_urlsafe(32)
        self.connection.change(f'INSERT INTO sessions (token, email) VALUES ("{token}", "{email}")')
        return token

    def getToken(self, token: string) -> string:
        return self.connection.get(f'SELECT * FROM sessions WHERE token = "{token}"')

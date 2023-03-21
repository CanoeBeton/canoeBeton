from domain.event import EventResponseList, EventResponse, EventRequest
from infra.connection import Connection

class EventRepository:
    TABLE = "events"

    def __init__(self):
        self.connection = Connection()
    def create(self, event: EventRequest):
        self.connection.change(f'INSERT INTO {EventRepository.TABLE} (name, begin_date, end_date, description, image) VALUES ("{event.name}", "{event.begin_date}", "{event.end_date}", "{event.description}", "{event.image}")')

    def get(self, id) -> EventResponse:
        tuple = self.connection.get(f'SELECT * FROM {EventRepository.TABLE} WHERE id = {id}')
        return EventResponse(tuple[0])

    def get_all(self) -> EventResponseList:
        return EventResponseList(self.connection.get(f'SELECT * FROM {EventRepository.TABLE}'))

    def update(self, event: EventRequest, id):
        self.connection.change(f'UPDATE {EventRepository.TABLE} SET name = "{event.name}", begin_date = "{event.begin_date}", end_date = "{event.end_date}", description = "{event.description}", image = "{event.image}" WHERE id = {id}')

    def delete(self, id):
        self.connection.change(f'DELETE FROM {EventRepository.TABLE} WHERE id = {id}')
import { FunctionComponent, PropsWithChildren, useState, useEffect } from 'react'
import styles from './Calendar.module.css'
import {Event as EventDomaine} from '../../../../domain/Event'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { EventClickArg } from '@fullcalendar/core'
import frLocale from '@fullcalendar/core/locales/fr';
import Modal from '@mui/material/Modal';
import EventModal from '../EventModal/EventModal'


interface HeaderProps { 
  events: EventDomaine[]
}

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
 }

const Calendar: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ events }) => {
  const [calendarEvents, setCalendarEvent] = useState<CalendarEvent[]>([])
  const [event, setEvent] = useState<EventDomaine | undefined>(undefined)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const calendarEvents: CalendarEvent[] = events.map((event: EventDomaine) => ({
      id: event.id.toString(),
      title: event.name,
      start: new Date(event.begin_date).toISOString().split('T')[0],
      end: new Date(event.end_date).toISOString().split('T')[0],
      allDay: true,
    }))
    setCalendarEvent(calendarEvents)
   }, [events])

  const handleEventClick = (arg: EventClickArg) => { 
    setEvent(events.find((event: EventDomaine) => event.id.toString() === arg.event.id))
    setOpen(true)
  }

  return (
    <span className={styles.calendar}>
      <FullCalendar
        locale={frLocale}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        selectable={true}
        weekends={true}
        events={calendarEvents}
        themeSystem={'true'}
        eventClick={handleEventClick}
        height={600}
      />
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {event ? <EventModal event={event} /> : <span>Une erreur est survenu!</span>}
    </Modal>
        
    </span>
  )
}

export default Calendar

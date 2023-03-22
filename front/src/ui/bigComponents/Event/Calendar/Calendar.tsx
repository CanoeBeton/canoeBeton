import { FunctionComponent, PropsWithChildren, useState, useEffect } from 'react'
import styles from './Calendar.module.css'
import {Event as EventDomaine} from '../../../../domain/Event'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { EventClickArg } from '@fullcalendar/core'

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

const Event: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ events }) => {
  const [calendarEvents, setCalendarEvent] = useState<CalendarEvent[]>([])

  useEffect(() => {
    const calendarEvents: CalendarEvent[] = events.map((event: EventDomaine) => ({
      id: event.id.toString(),
      title: event.name,
      start: new Date(event.begin_date).toISOString().split('T')[0],
      end: new Date(event.end_date).toISOString().split('T')[0],
      allDay: true,
    }))
    console.log(calendarEvents)
    setCalendarEvent(calendarEvents)
   }, [events])

  const handleEventClick = (arg: EventClickArg) => { 
    alert(arg.event.title)
  }

  return (
    <span className={styles.calendar}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        selectable={true}
        weekends={true}
        events={calendarEvents}
        themeSystem={'true'}
        eventClick={handleEventClick}
        />
    </span>
  )
}

export default Event

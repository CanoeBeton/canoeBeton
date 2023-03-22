import { FunctionComponent, PropsWithChildren, useState, useEffect } from 'react'
import styles from './Event.module.css'

import { Event } from '../../../domain/Event'
import { getEvents } from '../../../api/event'
import Calendar from './Calendar/Calendar'

interface HeaderProps { }


const Event: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ }) => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const events: Event[] = await getEvents();
      setEvents(events);
    };

    fetchData()
  }, [])


  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1>ÉVÉNEMENTS</h1>
      </div>
      <div className={styles.calendar_section}>
        <h2 className={styles.subtitle}>Notre calendrier</h2>
        <Calendar events={events} />
      </div>
    </div>
  )
}

export default Event

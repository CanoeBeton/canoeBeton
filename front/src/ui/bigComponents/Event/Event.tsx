import { FunctionComponent, PropsWithChildren, useState, useEffect } from 'react'
import styles from './Event.module.css'

import { Event } from '../../../domain/Event'
import { getEvents } from '../../../api/event'
import Calendar from './Calendar/Calendar'
import NextEvent from './NextEvent/NextEvent'
import LiveEvents from './LiveEvent/LiveEvents'
import {useQuery} from "@tanstack/react-query";

interface HeaderProps { }


const Event: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ }) => {
  const {data: events, status} = useQuery({queryFn: ()=> getEvents()})

  const [nextEvent, setNextEvent] = useState<Event | undefined>(undefined)
  const [liveEvents, setLiveEvents] = useState<Event[]>([])


  useEffect(() => {
      if(events !== undefined) {
        events.sort((a, b) => {
          const aDate = new Date(a.begin_date)
          const bDate = new Date(b.begin_date)
          return aDate >= bDate ? 1 : -1
        })

        setNextEvent(events.find((event) => {
          return new Date(event.begin_date) >= new Date(Date.now())
        }))

        setLiveEvents(events.filter((event) => {
          new Date(event.begin_date) <= new Date(Date.now()) && new Date(event.end_date) >= new Date(Date.now())
        }))
      }

  }, [events])


  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1>ÉVÉNEMENTS</h1>
      </div>
      <h2> Prochain événement </h2>
      {nextEvent ?
        <div className={styles.next_event}>
          <NextEvent event={nextEvent}/>
        </div>
        : <p>Aucun événement prévu pour l&apos;instant</p>}
      
      <h2> Événement en cours </h2>
      {liveEvents.length !== 0 ?
        <>
          <div className={styles.next_event}>
            <LiveEvents events={liveEvents}/> 
          </div>
        </>
        : <p>Aucun événement actuellement en cours!</p>}
      
      <div className={styles.calendar_section}>
        <h2 className={styles.subtitle}>Notre calendrier</h2>
        {status == 'error' && <span>Erreur lors du chargement des événements</span>}
        {status == 'loading' && <span>Chargement des événements...</span>}
        {status == 'success' && <Calendar events={events} />}
      </div>
    </div>
  )
}

export default Event

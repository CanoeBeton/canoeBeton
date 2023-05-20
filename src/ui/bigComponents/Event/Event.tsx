import {
  FunctionComponent,
  PropsWithChildren,
  useState,
  useEffect,
} from 'react'

import { Event } from '../../../domain/Event'
import { getEvents } from '../../../api/event'
import Calendar from './Calendar/Calendar'
import NextEvent from './NextEvent/NextEvent'
import LiveEvents from './LiveEvent/LiveEvents'
import { useQuery } from 'react-query'

interface HeaderProps {}

const Event: FunctionComponent<PropsWithChildren<HeaderProps>> = ({}) => {
  const { data: events, status } = useQuery({ queryFn: () => getEvents() })

  const [nextEvent, setNextEvent] = useState<Event | undefined>(undefined)
  const [liveEvents, setLiveEvents] = useState<Event[]>([])

  useEffect(() => {
    if (events !== undefined) {
      events.sort((a, b) => {
        const aDate = new Date(a.begin_date)
        const bDate = new Date(b.begin_date)
        return aDate >= bDate ? 1 : -1
      })

      setNextEvent(
        events.find((event) => {
          return new Date(event.begin_date) >= new Date(Date.now())
        })
      )

      setLiveEvents(
        events.filter((event) => {
          new Date(event.begin_date) <= new Date(Date.now()) &&
            new Date(event.end_date) >= new Date(Date.now())
        })
      )
    }
  }, [events])

  return (
    <div className={'flex flex-col align-center mx-[5vw] pt-4'}>
      <div className={'flex justify-center'}>
        <h1 className={'page-title'}>ÉVÉNEMENTS</h1>
      </div>
      <h2 className={'section-title'}> Prochain événement </h2>
      {nextEvent ? (
        <NextEvent event={nextEvent} />
      ) : (
        <p>Aucun événement prévu pour l&apos;instant</p>
      )}

      <h2 className={'section-title'}> Événement en cours </h2>
      {liveEvents.length !== 0 ? (
        <LiveEvents events={liveEvents} />
      ) : (
        <p className={'mb-10'}>Aucun événement actuellement en cours!</p>
      )}

      <div>
        <h2 className={'section-title'}>Notre calendrier</h2>
        {status == 'error' && (
          <span>Erreur lors du chargement des événements</span>
        )}
        {status == 'loading' && <span>Chargement des événements...</span>}
        {status == 'success' && <Calendar events={events} />}
      </div>
    </div>
  )
}

export default Event

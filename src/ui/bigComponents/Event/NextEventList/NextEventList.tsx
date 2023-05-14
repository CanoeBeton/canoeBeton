import { FunctionComponent, PropsWithChildren, useState, useEffect } from 'react'
import { Event } from '../../../../domain/Event'
import { useQuery } from 'react-query';
import { getEvents } from '../../../../api/event';

const NextEventList: FunctionComponent = () => {
  const { data: events, status } = useQuery({ queryFn: () => getEvents() })

  const [nextEvent, setNextEvent] = useState<Event[] | undefined>(undefined)

  useEffect(() => {
    if (events !== undefined) {
      events.sort((a, b) => {
        const aDate = new Date(a.begin_date)
        const bDate = new Date(b.begin_date)
        return aDate >= bDate ? 1 : -1
      })
      setNextEvent(events.slice(0, 3))
    }
  }, [status])
  

  const transformDate = (date: string) : string => {
    const dateObject = new Date(date)
    return dateObject.toLocaleDateString('fr-FR', {day: 'numeric', month: 'long'})
  }

  return (
    <div className={'flex gap-[10vw] justify-center'}>
      {nextEvent && nextEvent.map((event:Event) => 
        (
        <div key={event.id} className={'bg-white'}> 
          <img src={event.image} alt={event.name} />
          <div className={'items-center justify-center flex flex-col gap-2 min-h-[5em]'}>
            <h1 className={'text-3xl font-bold'}>{event.name}</h1>
            <span>À partir du {transformDate(event.begin_date)}!</span>
          </div>
        </div>
        )
        )}
    </div>
  );
}

export default NextEventList

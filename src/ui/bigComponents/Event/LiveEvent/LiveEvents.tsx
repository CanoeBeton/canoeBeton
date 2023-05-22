import { FunctionComponent, PropsWithChildren} from 'react'
import { Event } from '../../../../domain/Event'


interface HeaderProps { 
  events: Event[]
}

const LiveEvents: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ events }) => {
  const displayEvent = (event: Event, i: number) => {
    const boxStlye = i % 2 === 0 ? 'flex gap-3' : 'flex flex-row-reverse gap-3'

    return (
      <div className={boxStlye} key={event.id}>
        <div className={'flex flex-col items-center p-3 flex-1 max-h-[35vh]'}>
          <h1 className={'font-bold text-2xl pb-8'}>{event.name}</h1>
          <p>{event.description}</p>
        </div>
        <div className={'flex flex-col items-center p-3 flex-1 max-h-[35vh]'}>
          <img
            className={'object-contain h-[100%] w-[100%]'}
            src={event.image}
            alt="image de l\'événement'"
          />
        </div>
      </div>
    )
  }

  const displayListEvents = (events: Event[]) => { 
    let html : JSX.Element[] = [];
    for(let i = 0; i < events.length; i++) {
      html.push(displayEvent(events[i], i))
    }
    return html;
  }

  return (
    <div className={'flex flex-col justify-center gap-[4vh]'}>
      {displayListEvents(events)}
    </div>
  )
}

export default LiveEvents

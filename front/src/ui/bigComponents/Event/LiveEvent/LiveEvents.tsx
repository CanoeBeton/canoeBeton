import { FunctionComponent, PropsWithChildren, useState, useEffect } from 'react'
import styles from './LiveEvents.module.css'
import { Event } from '../../../../domain/Event'


interface HeaderProps { 
  events: Event[]
}

const LiveEvents: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ events }) => {
  const displayEvent = (event: Event, i: number) => {
    const boxStlye = i % 2 === 0 ? styles.box : styles.box_reverse

    return (
      <div className={boxStlye}>
        <div className={styles.half_box}>
          <h1>{event.name}</h1>
          <p>{event.description}</p>
        </div>
        <div className={styles.half_box}>
          <img
            className={styles.image}
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
    <div className={styles.liveEventsContainer}>
      {displayListEvents(events)}
    </div>
  )
}

export default LiveEvents

import { FunctionComponent, PropsWithChildren, useState, useEffect } from 'react'
import styles from './NextEvent.module.css'
import { Event } from '../../../../domain/Event'
import Countdown from 'react-countdown';


interface HeaderProps { 
  event: Event
}

const NextEvent: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ event }) => {
  const Completionist = () => <span className={styles.title}> L&apos;événement est maintenant en live! </span>;

  return (
    <div className={styles.box}>
      <div className={styles.half_box}>
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        <Countdown date={new Date(event.begin_date)} className={styles.time_container}>
          <Completionist />
        </Countdown>
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

export default NextEvent

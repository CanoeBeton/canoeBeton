import { FunctionComponent, PropsWithChildren, useState, useEffect } from 'react'
import styles from './EventModal.module.css'
import {Event} from '../../../../domain/Event'

interface HeaderProps { 
  event: Event
}

const EventModal: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ event }) => {
  const dateDebut = new Date(event.begin_date)
  const dateFin = new Date(event.end_date)
  const options : Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };

  return (
    <div className={styles.modal}>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <p>Début: { dateDebut.toLocaleDateString("FR-Ca", options) } - Fin : { dateFin.toLocaleDateString("fr-Ca", options) } </p>
      <img
        className={styles.image}
        src={event.image}
        alt="image de l\'événement'"
      />
    </div>
  )
}

export default EventModal

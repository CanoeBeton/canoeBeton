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
    <div className={`absolute top-[50%] left-[50%] w-[60vw] bg-white border-2 border-solid
     border-black shadow-xl p-4 flex flex-col content-center items-center translate-x-[-50%] translate-y-[-50%] gap-5`}>
      <h1 className={'section-title pb-0'}>{event.name}</h1>
      <p>{event.description}</p>
      <p>Début: { dateDebut.toLocaleDateString("FR-Ca", options) } - Fin : { dateFin.toLocaleDateString("fr-Ca", options) } </p>
      <img
        className={'max-w-[500px] max-h-[500px]'}
        src={event.image}
        alt="image de l\'événement'"
      />
    </div>
  )
}

export default EventModal

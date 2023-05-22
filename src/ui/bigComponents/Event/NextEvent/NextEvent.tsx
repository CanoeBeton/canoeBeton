import { FunctionComponent, PropsWithChildren, useState, useEffect } from 'react'
import styles from './NextEvent.module.css'
import { Event } from '../../../../domain/Event'
import Countdown from 'react-countdown';


interface HeaderProps { 
  event: Event
}

const NextEvent: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ event }) => {
  const Completionist = () => <span className={'font-semibold text-3xl'}> L&apos;événement est maintenant en live! </span>;

  return (
    <div className={'flex gap-[5vw] my-12'}>
      <div className={'flex flex-col items-center p-2d w-[45vw] gap-6'}>
        <h1 className={'font-bold text-2xl pb-8'}>{event.name}</h1>
        <p className={'leading-6'}>{event.description}</p>
        <Countdown date={new Date(event.begin_date)} className={'m-3 font-semibold text-3xl'}>
          <Completionist />
        </Countdown>
      </div>
      <div className={'flex flex-col items-center p-2 max-h-[40vh] w-[45vw]'}>
        <img
          className={'object-contain h-[100%]'}
          src={event.image}
          alt="image de l\'événement'"
        />
      </div>
    </div>
  )
}

export default NextEvent

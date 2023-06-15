import { FunctionComponent, PropsWithChildren, useState, useEffect } from 'react'
import { Event } from '../../../../domain/Event'
import Countdown from 'react-countdown';


interface HeaderProps { 
  event: Event
}

const NextEvent: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ event }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span className={'font-semibold text-3xl'}> L&apos;événement est maintenant en live! </span>;
    } else {
      return (
        <div className='flex flex-row gap-4 text-center text-xl'>
          <div className={'flex flex-col items-center'}>
            <span>{days}</span>
            <span>Jours</span>
          </div>
          <span>:</span>
          <div className={'flex flex-col'}>
            <span>{hours}</span>
            <span>Heures</span>
          </div>
          <span>:</span>
          <div className={'flex flex-col'}>
            <span>{minutes}</span>
            <span>Minutes</span>
          </div>
          <span>:</span>
          <div className={'flex flex-col'}>
            <span>{seconds}</span>
            <span>Secondes</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={'flex my-12'}>
      <div className={'flex flex-col items-center p-2d w-[45vw] gap-6'}>
        <h1 className={'font-bold text-2xl pb-4'}>{event.name}</h1>
        <p className={'leading-6'}>{event.description}</p>s
        <Countdown date={new Date(event.begin_date)} className={'m-3 font-semibold text-3xl'} renderer={renderer} />
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

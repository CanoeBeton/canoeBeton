import { FunctionComponent, PropsWithChildren } from 'react'
import {Partenaire} from "../../../../domain/Partenaire";

interface SponsorCardProps {
  partenaire : Partenaire
  pictureLeft: boolean
}

const sponsorCard: FunctionComponent<PropsWithChildren<SponsorCardProps>> = ({
 partenaire,
 pictureLeft = true
}) => {
  return (
    <div className={`flex ${pictureLeft ? 'flex-row-reverse' : 'flex-row'} ${pictureLeft ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-[#f5f8fa] to-gray-300`}>
      <div className={`flex flex-col w-[50vw] p-8 items-center`}>
        <div className={`font-bold text-2xl pb-4`}>{ partenaire.name }</div>
        <div className={''}>{partenaire.description}</div>
      </div>
      <div className={'items-center max-h-[40vh] w-[50vw] p-8'}>
        <img
          src={partenaire.image}
          alt='logo sponsor'
          className={'object-contain h-[80%]'}
        />
      </div>
    </div>
  )
}

export default sponsorCard

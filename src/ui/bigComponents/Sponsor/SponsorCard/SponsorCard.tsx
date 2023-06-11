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
    <div className={`flex ${pictureLeft ? 'flex-row-reverse' : 'flex-row'} bg-gradient-to-${pictureLeft ? 'l' : 'r'} from-white to-gray-950`}>
      <div className={`flex flex-col w-[50vw] p-8`}>
        <div>{ partenaire.name }</div>
        <div className={''}>{partenaire.description}</div>
      </div>
      <div className={'items-center max-h-[40vh] w-[50vw] p-8'}>
        <img
          src={partenaire.image}
          alt='logo sponsor'
          className={'object-contain h-[100%]'}
        />
      </div>
    </div>
  )
}

export default sponsorCard

import { FunctionComponent, PropsWithChildren } from 'react'
import {Partenaire} from "../../../../domain/Partenaire";

interface SponsorCardProps {
  partenaire : Partenaire
  isRight: boolean
}

const sponsorCard: FunctionComponent<PropsWithChildren<SponsorCardProps>> = ({
 partenaire,
 isRight = true
}) => {
  return (
    <div>
      <div className={`flex gap-3 rounded p-1 m-1 justify-between`}>
        <div className={'text-justify'}>{partenaire.description}</div>
        <div className={''}>
          <img
            src={partenaire.image}
            width={1000}
            height={1000}
            alt={'logo sponsor'}
            className={''}
          />
        </div>
      </div>
    </div>
  )
}

export default sponsorCard

import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './SponsorCard.module.css'
import {Partenaire} from "../../../../domain/Partenaire";

interface SponsorCardProps {
  partenaire : Partenaire
}

const sponsorCard: FunctionComponent<PropsWithChildren<SponsorCardProps>> = ({
 partenaire
}) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.description}>{partenaire.description}</div>
        <div className={styles.imageContainer}>
          <img
            src={partenaire.image}
            width={1000}
            height={1000}
            alt={'logo sponsor'}
            className={styles.responsiveSmaller}
          />
        </div>
      </div>
    </div>
  )
}

export default sponsorCard

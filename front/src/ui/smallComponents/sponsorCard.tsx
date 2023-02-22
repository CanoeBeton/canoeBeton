import Image from 'next/image'
import { FunctionComponent, PropsWithChildren } from 'react'
import { Sponsor } from '../bigComponents/Sponsor'
import styles from 'styles/ui/smallComponents/SponsorCard.module.css'

interface SponsorCardProps {
  sponsor: Sponsor
  isMosaique?: boolean
}

const sponsorCard: FunctionComponent<PropsWithChildren<SponsorCardProps>> = ({
  sponsor,
  isMosaique,
}) => {
  return (
    <div>
      {isMosaique ? (
        <Image
          src={'Sponsors/' + sponsor.imagePath}
          width={1000}
          height={3000}
          alt={'logo sponsor'}
          className={styles.responsive}
        />
      ) : (
        <div className={styles.card}>
          <div className={styles.description}>{sponsor.description}</div>
          <div className={styles.imageContainer}>
            <Image
              src={'Sponsors/' + sponsor.imagePath}
              width={1000}
              height={1000}
              alt={'logo sponsor'}
              className={styles.responsiveSmaller}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default sponsorCard

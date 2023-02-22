import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'

import SponsorCard from './SponsorCard/SponsorCard'
import styles from './Sponsor.module.css'

//Type
import { Sponsor } from '../../../domain/Sponsor'

const Sponsor: FunctionComponent<PropsWithChildren> = ({}) => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/sponsor')
      const data = await res.json()
      setSponsors(data)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.h1}>Partenaires</div>
      <div className={styles.sousTitre}>2021-2022</div>
      <div>
        Merci à nos fidèles partenaires de contribuer à notre projet chaque
        année!
      </div>
      <div className={styles.mosaiqueContainer}>
        {sponsors.map((sponsor) =>
          sponsor.categorie === 'mosaique' ? (
            <SponsorCard
              sponsor={sponsor}
              isMosaique={true}
              key={sponsor.imagePath}
            />
          ) : null
        )}
      </div>
      <div className={styles.h2}>Categorie Béton</div>
      <div>
        Un merci spéciale à nos partenaires <b>Béton</b>!
      </div>
      <div className={styles.sponsorsContainer}>
        {sponsors.map((sponsor) =>
          sponsor.categorie === 'Béton' ? (
            <SponsorCard
              sponsor={sponsor}
              isMosaique={false}
              key={sponsor.imagePath}
            />
          ) : null
        )}
      </div>
    </div>
  )
}

export default Sponsor

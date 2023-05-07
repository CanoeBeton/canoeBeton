import { FunctionComponent, PropsWithChildren } from 'react'

import styles from './Sponsor.module.css'

import { useQuery } from 'react-query'
import { getPartenaire } from '../../../api/partenaire'
import SponsorCard from './SponsorCard/SponsorCard'
import { getActiveYear } from '../../../api/year'
const Sponsor: FunctionComponent<PropsWithChildren> = ({}) => {
  const { data: partenaire, status: partenaireStatus } = useQuery({
    queryKey: ['partenaire'],
    queryFn: () => getPartenaire(true),
  })
  const { data: year, status: yearStatus } = useQuery({
    queryKey: ['active year'],
    queryFn: () => getActiveYear(),
  })

  return (
    <div className={styles.page}>
      <div className={styles.h1}>Partenaires</div>
      <h2>Nos partenaire de l&apos;année! </h2>
      {yearStatus == 'error' && (
        <span>Une erreur est survenue, veillez réessayer plustard</span>
      )}
      {yearStatus == 'loading' && <span> Chargement en cours ! </span>}
      {yearStatus == 'success' && (
        <div className={styles.imageContainer}>
          <img src={year.partenaire_mosaique} alt={'Mosaique des partenaires'}/>
        </div>
      )}
      <h2>Nos partenaire </h2>
      {partenaireStatus == 'error' && (
        <span>Une erreur est survenue, veillez réessayer plustard</span>
      )}
      {partenaireStatus == 'loading' && <span> Chargement en cours ! </span>}
      {partenaireStatus == 'success' && (
        <div>
          {partenaire?.map((partenaire) => (
            <SponsorCard partenaire={partenaire} key={partenaire.name}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default Sponsor

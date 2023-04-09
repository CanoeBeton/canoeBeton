import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './Historique.module.css'
import { useQuery } from 'react-query'
import { getYears } from '../../../api/year'
import YearCard from './YearCard/YearCard'

interface HeaderProps {}

const Historique: FunctionComponent<PropsWithChildren<HeaderProps>> = ({}) => {
  const { data: year, status } = useQuery({
    queryKey: ['year'],
    queryFn: () => getYears(),
  })

  return (
    <div className={styles.page}>
      <span className={styles.page_title}>Historique</span>
      <div className={styles.tournament_container}>
        {status == 'error' && (
          <span>Une erreur est survenue, veillez réessayer plustard</span>
        )}
        {status == 'loading' && <span> Chargement en cours ! </span>}
        {year
          ?.sort((a, b) => b.year - a.year)
          .map((year) => (
            <YearCard year={year} />
          ))}
      </div>
    </div>
  )
}

export default Historique

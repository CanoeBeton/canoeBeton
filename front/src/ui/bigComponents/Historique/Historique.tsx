import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'
import styles from './Historique.module.css'
import TournamentCard from '../../smallComponents/TournamentCard/TournamentCard'

//Type
import { Tournament } from '../../../domain/Tournament'

interface HeaderProps {}

const Historique: FunctionComponent<PropsWithChildren<HeaderProps>> = ({}) => {
  const [tournament, setTournaments] = useState<Tournament[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/historique')
      const data = await res.json()
      setTournaments(data)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.page}>
      <span className={styles.page_title}>Historique</span>
      <div className={styles.tournament_container}>
        {tournament.map((tournament) => (
          <TournamentCard tournament={tournament} key={tournament.name} />
        ))}
      </div>
    </div>
  )
}

export default Historique

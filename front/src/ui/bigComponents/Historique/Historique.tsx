import {
  FunctionComponent,
  PropsWithChildren,
} from 'react'
import styles from './Historique.module.css'
import TournamentCard from './TournamentCard/TournamentCard'

import { Tournament } from '../../../domain/Tournament'

interface HeaderProps {}

const Historique: FunctionComponent<PropsWithChildren<HeaderProps>> = ({}) => {
  return <></>
  /*return (
    <div className={styles.page}>
      <span className={styles.page_title}>Historique</span>
      <div className={styles.tournament_container}>
        {tournament.map((tournament) => (
          <TournamentCard tournament={tournament} key={tournament.name} />
        ))}
      </div>
    </div>
  )

   */
}

export default Historique

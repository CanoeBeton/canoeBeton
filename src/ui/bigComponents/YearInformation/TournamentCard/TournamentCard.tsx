import {
  FunctionComponent,
  PropsWithChildren,
} from 'react'
import styles from './Tournament.module.css'
import {Tournament} from "../../../../domain/Tournament";

interface HeaderProps {
  tournament: Tournament
}


const TournamentCard: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
   tournament
}) => {
  const displayTournamentPosition = (position: number) => {
    if (position == 1) {
      return <img src="/Historique/trophee1.webp" alt="1er"/>
    }  else if (position == 2) {
      return <img src="/Historique/trophee2.webp" alt="2e"/>
    } else if (position == 3) {
      return <img src="/Historique/trophee3.webp" alt="3e"/>
    }else {
      return <span>{position}e</span>
    }
  }

  return (
    <div className={styles.tournamentCard}>
      <span className={styles.tournamentName}>{tournament.name}</span>
      {displayTournamentPosition(tournament.position)}
      <span> École hôtesse : {tournament.localisation}</span>
      <span>{tournament.description}</span>
    </div>
  )
}


export default TournamentCard

import { FunctionComponent, PropsWithChildren, useEffect, useState } from "react"
import styles from 'styles/ui/bigComponents/Historique.module.css'
import TournamentCard from "../smallComponents/TournamentCard";

interface HeaderProps {
  tournamentName: string;
}

export interface Tournament {
  name: string;
  date: string;
  imagePath: string;
}

const TournamentInformation: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ tournamentName }) => {
  console.log(tournamentName);
  const [tournament, setTournament] = useState<Tournament>();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/tournament?tournament='+tournamentName);
      const data = await res.json();
      setTournament(data);
      console.log(data);
    }
    fetchData();
  }, [tournamentName]);
  
  return (
    <div className={styles.page}>
      <span className={styles.page_title}>{ tournament?.name }</span>
    </div>
  )
}

export default TournamentInformation;
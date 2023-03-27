import {
  FunctionComponent,
  PropsWithChildren,
  useEffect, useState
} from 'react'
import styles from './YearInformation.module.css'
import {getYear} from "../../../api/year";
import {useQuery} from "@tanstack/react-query";
import {getTournaments} from "../../../api/tournament";
import {getBoat} from "../../../api/boat";
import {Boat} from "../../../domain/Boat";

interface HeaderProps {
  yearName: string
}


const YearInformation: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
 yearName
}) => {
  const {data: year, status: statusYear} = useQuery({ queryKey: ['year'], queryFn: () => getYear(Number(yearName)), onSuccess: () => setBoatData() })
  const {data: tournaments, status: statusTournaments} = useQuery({ queryKey: ['tournaments'], queryFn: () => getTournaments(Number(yearName)) })
  const [boat, setBoat] = useState<Boat>()

  const setBoatData = async () => {
    if (year == undefined) return
    setBoat(await getBoat(year.boat_name))
  }

  return (
    <div className={styles.page}>
      {statusYear == 'error' && <span>Une erreur est survenue, veillez réessayer plustard</span>}
      {statusYear == 'loading' && <span> Chargement en cours ! </span>}
      {statusYear == 'success' &&
        <div>
          <h1>Les tournois</h1>
          { statusTournaments == 'error' && <span>Aucun tournoi pour cette année</span>}
          <h1>Le bateau</h1>
          <h1>Les respoonsables</h1>
          <h1>Nos partenaires</h1>
          <img src={year.partenaire_mosaique}/>
        </div>
      }
    </div>
  )
}

export default YearInformation

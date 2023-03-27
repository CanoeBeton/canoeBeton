import {
  FunctionComponent,
  PropsWithChildren,
  useEffect, useState
} from 'react'
import styles from './YearInformation.module.css'
import {getYear} from "../../../api/year";
import {useQuery} from "@tanstack/react-query";
import {Tournament} from "../../../domain/Tournament";
import {getTournaments} from "../../../api/tournament";

interface HeaderProps {
  yearName: string
}


const YearInformation: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
 yearName
}) => {
  const {data: year, status} = useQuery({ queryKey: ['year'], queryFn: () => getYear(Number(yearName)) })
  const {data: tournaments, status: statusTournaments} = useQuery({ queryKey: ['tournaments'], queryFn: () => getTournaments(Number(yearName)) })
  const [boat, setBoat] = useState<Tournament>()
  //write a useEffect to fetch the boat.ts associate with year.boat_name
  useEffect(() => {
    console.log(year)

  }, [year])

  return (
    <div className={styles.page}>
      {status == 'error' && <span>Une erreur est survenue, veillez réessayer plustard</span>}
      {status == 'loading' && <span> Chargement en cours ! </span>}
      {status == 'success' &&
        <div>
          <h1>Les tournois</h1>

          <h1>Nos partenaires</h1>
          <img src={year.partenaire_mosaique}/>
        </div>
      }
    </div>
  )
}

export default YearInformation

import {
  FunctionComponent,
  PropsWithChildren,
} from 'react'
import styles from './Historique.module.css'
import {useQuery} from "@tanstack/react-query";
import {getYears} from "../../../api/year";
import YearCard from "./YearCard/YearCard";

interface HeaderProps {}

const Historique: FunctionComponent<PropsWithChildren<HeaderProps>> = ({}) => {
  const {data: year, error} = useQuery({ queryKey: ['year'], queryFn: () => getYears() })

  return (
    <div className={styles.page}>
      <span className={styles.page_title}>Historique</span>
      <div className={styles.tournament_container}>
        {year?.map((year) => <YearCard year={year}/>)}
      </div>
    </div>
  )
}

export default Historique

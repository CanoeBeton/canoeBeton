import {
  FunctionComponent,
  PropsWithChildren,
} from 'react'

import styles from './Sponsor.module.css'

import { useQuery } from "@tanstack/react-query";
import { getPartenaire } from "../../../api/partenaire";
import {Partenaire} from "../../../domain/Partenaire";
import SponsorCard from "./SponsorCard/SponsorCard";

const Sponsor: FunctionComponent<PropsWithChildren> = ({}) => {

  const {data: partenaire , status} = useQuery({ queryKey: ['partenaire'], queryFn: () => getPartenaire(true) })

  return (
    <div className={styles.page}>
      <div className={styles.h1}>Partenaires</div>
      <h2>Nos partenaire de l&apos;année! </h2>
      <h2>Nos partenaire </h2>

      {status == 'error' && <span>Une erreur est survenue, veillez réessayer plustard</span>}
      {status == 'loading' && <span> Chargement en cours ! </span>}
      {status == 'success' &&
        <div>
          {partenaire?.map((partenaire) => <SponsorCard partenaire={partenaire}/>)}
        </div>
      }
    </div>
  )
}

export default Sponsor

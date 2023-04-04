import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './YearCard.module.css'
import {Year} from "../../../../domain/Year";

interface HeaderProps {
  year: Year
}

const YearCard: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
  year,
}) => {
  const lien = 'historique/' + year.year

  return (
    <Link href={lien}>
      <div className={styles.card}>
        <Image
          src={year.icone}
          alt={year.boat_name}
          width={368}
          height={314}
        />
        <span className={styles.year_name}>
          {year.boat_name} - {year.year}
        </span>
      </div>
    </Link>
  )
}

export default YearCard

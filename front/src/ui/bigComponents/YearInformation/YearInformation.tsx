import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './YearInformation.module.css'
import { getYear } from '../../../api/year'
import { useQuery } from 'react-query'
import { getTournaments } from '../../../api/tournament'
import TournamentCard from './TournamentCard/TournamentCard'
import BoatInformation from './BoatInformation/BoatInformation'
import MemberCard from '../Team/MemberCard/MemberCard'
import { getMembersYear } from '../../../api/member'

interface HeaderProps {
  yearName: string
}

const YearInformation: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
  yearName,
}) => {
  const { data: year, status: statusYear } = useQuery({
    queryKey: ['year'],
    queryFn: () => getYear(Number(yearName)),
  })
  const { data: tournaments, status: statusTournaments } = useQuery({
    queryKey: ['tournaments'],
    queryFn: () => getTournaments(Number(yearName)),
  })
  const { data: responsables, status: statusResponsables } = useQuery({
    queryKey: ['responsables'],
    queryFn: () => getMembersYear(Number(yearName)),
  })

  return (
    <div className={styles.page}>
      {statusYear == 'error' && (
        <span>Une erreur est survenue, veillez réessayer plustard</span>
      )}
      {statusYear == 'loading' && <span> Chargement en cours ! </span>}
      {statusYear == 'success' && (
        <div>
          <h1>Les tournois</h1>
          <div className={styles.tournamentContainer}>
            {statusTournaments == 'error' && (
              <span>Aucun tournoi pour cette année!</span>
            )}
            {statusTournaments == 'success' &&
              tournaments?.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
          </div>
          <h1>Le bateau</h1>
          <BoatInformation boatName={year?.boat_name} />
          <h1>Les responsables</h1>
          <div className={styles.responsableContainer}>
            {responsables?.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
          <h1>Nos partenaires</h1>
          <img src={year.partenaire_mosaique} />
        </div>
      )}
    </div>
  )
}

export default YearInformation

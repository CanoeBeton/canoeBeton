import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './YearInformation.module.css'
import { getYear } from '../../../api/year'
import { useQuery } from 'react-query'
import { getTournamentsByYear } from '../../../api/tournament'
import TournamentCard from './TournamentCard/TournamentCard'
import BoatInformation from './BoatInformation/BoatInformation'
import MemberCard from '../Team/MemberCard/MemberCard'
import { getMembersByYear } from '../../../api/member'

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
    queryFn: () => getTournamentsByYear(yearName),
  })

  const { data: responsables, status: statusResponsables } = useQuery({
    queryKey: ['responsables'],
    queryFn: () => getMembersByYear(yearName),
  })

  return (
    <div className={styles.page}>
      {statusYear == 'error' && (
        <span>Une erreur est survenue, veillez réessayer plustard</span>
      )}
      {statusYear == 'loading' && <span> Chargement en cours ! </span>}
      {statusYear == 'success' && (
        <div className="px-[5vw] py-5 bg-beton/70 ">
          <h1 className="section-title">Les tournois</h1>
          <div className="grid-cols-1 md:grid-cols-2 grid gap-5 auto-rows-fr xl:grid-cols-3 mb-10">
            {statusTournaments == 'error' && (
              <span>Aucun tournoi pour cette année!</span>
            )}
            {statusTournaments == 'success' &&
              tournaments?.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
          </div>
          <BoatInformation boatName={year?.boat_name} />
          <h1 className="section-title">Les responsables</h1>
          <div className={styles.responsableContainer}>
            {responsables?.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
          <h1 className="section-title">Nos partenaires</h1>
          <img
            src={year.partenaire_mosaique}
            alt={'Mosaique des partenaires'}
          />
        </div>
      )}
    </div>
  )
}

export default YearInformation

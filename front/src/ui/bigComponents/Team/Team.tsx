import {
  FunctionComponent,
  PropsWithChildren,
} from 'react'
import MemberCard from './MemberCard/MemberCard'
import styles from './Team.module.css'

import { getMembers } from '../../../api/member'
import {useQuery} from "@tanstack/react-query";

const Team: FunctionComponent<PropsWithChildren> = ({}) => {
  const { data: members, status } = useQuery({queryFn: () => getMembers()})

  return (
    <div className={styles.page}>
      <span className={styles.big_title}>Notre équipe</span>
      {status === 'loading' && <div>Chargement en cours...</div>}
      {status === 'error' && <div>Une erreur est survenue</div>}
      {status === 'success' && (
        <>
      <span className={styles.title}>Nos responsables</span>
        <div className={styles.team_container}>
          {members.filter((member) => member.role !== null).map((member) => (<MemberCard member={member} key={member.name} />))}
        </div>
      <span className={styles.title}>Nos membres</span>
        <div className={styles.team_container}>
          {members.filter((member) => member.role === null).map((member) => (<MemberCard member={member} key={member.name} />))}
        </div>
        </>
      )}
    </div>
  )
}

export default Team

import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'
import MemberCard from './MemberCard/MemberCard'
import styles from './Team.module.css'

//Type
import { Member } from '../../../domain/Member'

const Team: FunctionComponent<PropsWithChildren> = ({}) => {
  const [members, setMembers] = useState<Member[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/team')
      const data = await res.json()
      setMembers(data)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.page}>
      <span className={styles.big_title}>Notre équipe</span>
      <span className={styles.title}>Nos responsables</span>
      <div className={styles.team_container}>
        {members.map((member) =>
          member.role !== "Membre de l'équipe" ? (
            <MemberCard member={member} key={member.name} afficherRole />
          ) : null
        )}
      </div>

      <span className={styles.title}>Nos membres</span>
      <div className={styles.team_container}>
        {members.map((member) =>
          member.role === "Membre de l'équipe" ? (
            <MemberCard member={member} key={member.name} />
          ) : null
        )}
      </div>
    </div>
  )
}

export default Team

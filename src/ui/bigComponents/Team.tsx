import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'
import MemberCard from '../smallComponents/memberCard'
import styles from 'styles/ui/bigComponents/Team.module.css'

export interface Member {
  name: string
  role: string
  description: string
  imagePath: string
}

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
      <span className={styles.title}>Nos responsable</span>
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

import Image from 'next/image'
import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './MemberCard.module.css'

//Type
import { Member } from '../../../../domain/Member'

interface HeaderProps {
  member: Member
  afficherRole?: boolean
}

const MemberCard: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
  member,
  afficherRole,
}) => {
  return (
    <div className={styles.card}>
      {afficherRole ? <span className={styles.role}>{member.role}</span> : null}
      <Image
        src={'Team/' + member.imagePath}
        alt={member.name}
        width={300}
        height={300}
      />
      <span className={styles.name}>{member.name}</span>
      <span className={styles.description}>{member.description}</span>
    </div>
  )
}

export default MemberCard

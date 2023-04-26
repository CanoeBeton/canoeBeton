import Image from 'next/image'
import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './MemberCard.module.css'

import { Member } from '../../../../domain/Member'

interface HeaderProps {
  member: Member
}

const MemberCard: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
  member,
}) => {
  return (
    <div className={`${styles.card} w-[150px]`}>
      {member.role ? <span className={styles.role}>{member.role}</span> : null}
      <img src={member.image} alt={member.name} width={300} height={300} />
      <span className={styles.name}>{member.name}</span>
      <span className={styles.description}>{member.description}</span>
    </div>
  )
}

export default MemberCard

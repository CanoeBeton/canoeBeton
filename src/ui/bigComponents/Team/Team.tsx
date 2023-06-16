import { FunctionComponent, PropsWithChildren } from 'react'
import MemberCard from './MemberCard/MemberCard'
import styles from './Team.module.css'

import { getMembers } from '../../../api/member'
import { useQuery } from 'react-query'

const Team: FunctionComponent<PropsWithChildren> = ({}) => {
  const { data: members, status } = useQuery({ queryFn: () => getMembers() })

  return (
    <div className={'flex flex-col mx-[6vw]'}>
      <span className={'page-title self-center'}>Notre équipe</span>
      {status === 'loading' && <div>Chargement en cours...</div>}
      {status === 'error' && <div>Une erreur est survenue</div>}
      {status === 'success' && (
        <>
          <span className={'section-title'}>Nos responsables</span>
          <div className={'flex flex-row flex-wrap justify-center gap-4 self-center'}>
            {members
              .filter((member) => member.role !== null)
              .map((member) => (
                <div key={member.name}> 
                  <MemberCard member={member} />
                </div>
              ))}
          </div>
          <span className={'section-title'}>Nos membres</span>
          <div className={'flex flex-row flex-wrap justify-center gap-4 self-center'}>
            {members
              .filter((member) => member.role === null)
              .map((member) => (
                <div key={member.name}> 
                  <MemberCard member={member} />
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Team

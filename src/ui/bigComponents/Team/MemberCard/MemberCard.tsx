import { FunctionComponent, PropsWithChildren } from 'react'

import { Member } from '../../../../domain/Member'

interface HeaderProps {
  member: Member
}

const MemberCard: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
  member,
}) => {
  return (
     <div className={`bg-slate-400 gap-1 p-1 m-2 flex flex-col items-center w-[300px] text-center whitespace-pre-line h-[100%] rounded-md justify-around`}>
      {member.role ? <span className={'text-2xl h-16 font-bold'}>{member.role}</span> : null}
      <img src={member.image} alt={member.name} width={300} height={300} />
      <div className='flex flex-col'>
        <span className={'text-2xl'}>{member.name}</span>
        <span>{member.description}</span>
      </div>
    </div>
  )
}

export default MemberCard

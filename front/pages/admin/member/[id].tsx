import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { getMember } from '../../../src/api/member'

const MemberInfo = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  return <div></div>
}

export default MemberInfo

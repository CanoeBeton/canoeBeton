import React from 'react'
import Header from '../src/ui/bigComponents/Header/Header'
import Team from '../src/ui/bigComponents/Team/Team'

const team = () => {
  return (
    <>
      <Header current={'team'} />
      <Team />
    </>
  )
}

export default team

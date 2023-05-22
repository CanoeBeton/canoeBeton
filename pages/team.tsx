import React from 'react'
import Header from '../src/ui/bigComponents/Header/Header'
import Team from '../src/ui/bigComponents/Team/Team'
import Footer from '../src/ui/bigComponents/Accueil/Footer/Footer'

const team = () => {
  return (
    <>
      <Header current={'team'} />
      <Team />
      <Footer />
    </>
  )
}

export default team

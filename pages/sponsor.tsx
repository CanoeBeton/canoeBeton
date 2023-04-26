import React from 'react'
import Footer from '../src/ui/bigComponents/Accueil/Footer/Footer'
import Header from '../src/ui/bigComponents/Header/Header'
import Sponsor from '../src/ui/bigComponents/Sponsor/Sponsor'

const sponsor = () => {
  return (
    <>
      <Header current={'sponsor'} />
      <Sponsor />
      <Footer />
    </>
  )
}

export default sponsor

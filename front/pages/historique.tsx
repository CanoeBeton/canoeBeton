import React from 'react'
import Footer from '../src/ui/bigComponents/Accueil/Footer/Footer'
import Header from '../src/ui/bigComponents/Header/Header'
import Historique from '../src/ui/bigComponents/Historique/Historique'

const tournament = () => {
  return (
    <>
      <Header current={'historique'} />
      <Historique />
      <Footer />
    </>
  )
}

export default tournament

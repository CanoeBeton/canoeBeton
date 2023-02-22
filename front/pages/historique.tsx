import React from 'react'
import Footer from '../src/ui/bigComponents/Footer'
import Header from '../src/ui/bigComponents/Header'
import Historique from '../src/ui/bigComponents/Historique'

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

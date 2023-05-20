import React from 'react'
import Header from '../src/ui/bigComponents/Header/Header'
import Event from '../src/ui/bigComponents/Event/Event'
import Footer from '../src/ui/bigComponents/Accueil/Footer/Footer'

const event = () => {
  return (
    <>
      <Header current={'event'} />
      <Event/>
      <Footer/>
    </>
  )
}

export default event

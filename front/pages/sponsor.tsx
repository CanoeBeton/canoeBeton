import React from 'react'
import Footer from '../src/ui/bigComponents/Footer'
import Header from '../src/ui/bigComponents/Header'
import Sponsor from '../src/ui/bigComponents/Sponsor'

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

import React from 'react'
import Header from '../src/ui/bigComponents/Header/Header'
import Event from '../src/ui/bigComponents/Event/Event'

const event = () => {
  return (
    <>
      <Header current={'event'} />
      <Event/>
    </>
  )
}

export default event

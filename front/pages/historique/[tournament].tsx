import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../../src/ui/bigComponents/Accueil/Footer/Footer'
import Header from '../../src/ui/bigComponents/Header/Header'
import TournamentInformation from '../../src/ui/bigComponents/TournamentInformation/TournamentInformation'

type Props = {}

const Tournament: React.FC<Props> = ({}) => {
  const router = useRouter()
  const { tournament } = router.query

  return (
    <>
      <Header current={'historique'} />
      {/* <TournamentInformation tournamentName={tournament}/> */}
      <Footer />
    </>
  )
}

export default Tournament

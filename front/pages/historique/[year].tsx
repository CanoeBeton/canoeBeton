import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../../src/ui/bigComponents/Accueil/Footer/Footer'
import Header from '../../src/ui/bigComponents/Header/Header'
import YearInformation from "../../src/ui/bigComponents/YearInformation/YearInformation";

type Props = {}

const Year: React.FC<Props> = ({}) => {
  const router = useRouter()
  const { year } = router.query

  return (
    <>
      <Header current={'historique'} />
      {typeof year === 'string' &&
        <YearInformation yearName={year} />}
      <Footer />
    </>
  )
}

export default Year

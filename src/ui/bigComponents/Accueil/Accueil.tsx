import { FunctionComponent, PropsWithChildren } from 'react'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Information from './Information/Information'
import LastYear from './LastYear/LastYear'

interface HeaderProps {}

const Accueil: FunctionComponent<PropsWithChildren<HeaderProps>> = ({}) => {
  return (
    <div className={'flex flex-col items-center gap-12'}>
      <Hero />
      <Information />
      <LastYear />
      <Footer />
    </div>
  )
}

export default Accueil

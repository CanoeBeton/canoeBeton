import { FunctionComponent, PropsWithChildren } from 'react'
import Footer from './Footer/Footer'
import styles from './Accueil.module.css'
import Hero from './Hero/Hero'
import Information from './Information/Information'

interface HeaderProps {}

const Accueil: FunctionComponent<PropsWithChildren<HeaderProps>> = ({}) => {
  return (
    <div className={styles.page}>
      <Hero />
      <Information />
      <Footer />
    </div>
  )
}

export default Accueil

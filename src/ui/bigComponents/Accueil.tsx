import { FunctionComponent, PropsWithChildren } from 'react'
import Footer from './Footer'
import styles from 'styles/ui/bigComponents/Accueil.module.css'
import Hero from '../smallComponents/Hero'
import Information from '../smallComponents/Information'

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

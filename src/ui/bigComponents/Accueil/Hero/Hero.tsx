import { CSSProperties, FunctionComponent, PropsWithChildren } from 'react'

interface HeaderProps {}

const Hero: FunctionComponent<PropsWithChildren<HeaderProps>> = ({}) => {
  return (
    <div className={'flex flex-col justify-center items-center'}>
      <img src="Accueil/hero.webp" alt="Hero image" className={'h-[70vh] w-[100%] object-cover object-center'} />
      <div style={text}>
        <span style={title}>Canoë de Béton</span>
        <span style={subtitle}>DE L&apos;UNIVERSITÉ LAVAL</span>
      </div>
    </div>
  )
}

const text: CSSProperties | undefined = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '10em',
  alignItems: 'center'
}

const title: CSSProperties | undefined = {
  fontSize: '6em',
  fontWeight: 'bold',
  color: 'white',
}

const subtitle: CSSProperties | undefined = {
  fontSize: '3em',
  color: 'white',
}

export default Hero

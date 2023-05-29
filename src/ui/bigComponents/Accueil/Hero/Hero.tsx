import { FunctionComponent, PropsWithChildren } from 'react'

interface HeaderProps {}

const Hero: FunctionComponent<PropsWithChildren<HeaderProps>> = ({}) => {
  return (
    <div className={'flex flex-col justify-center items-center w-[100%]'}>
      <img src="Accueil/hero.webp" alt="Hero image" className={'h-[70vh] w-[100%] object-cover object-center'} />
      <div className={'flex flex-col absolute top-[20vh] items-center text-center'}>
        <span className={'text-6xl font-bold text-white sm:text-8xl'}>Canoë de Béton</span>
        <span className={'text-3xl text-white sm:text-5xl'}>DE L&apos;UNIVERSITÉ LAVAL</span>
      </div>
    </div>
  )
}

export default Hero

import Link from 'next/link'
import { FunctionComponent, PropsWithChildren, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface HeaderProps {
  current: string
}

const Header: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
  current,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const MenuOptions = () => {
    return (
    <>
      <Link href="/" style={current === 'home' ? activeLinkStyle : linkStyle}>
        Accueil
      </Link>
      <Link
        href="/event"
        style={current === 'event' ? activeLinkStyle : linkStyle}
      >
        Événement
      </Link>
      <Link
        href="/team"
        style={current === 'team' ? activeLinkStyle : linkStyle}
      >
        Équipe
      </Link>
      <Link
        href="/historique"
        style={current === 'historique' ? activeLinkStyle : linkStyle}
      >
        Historique
      </Link>
      <Link
        href="/sponsor"
        style={current === 'sponsor' ? activeLinkStyle : linkStyle}
      >
        Partenaire
      </Link>
      <Link
        href="/contact"
        style={current === 'contact' ? activeLinkStyle : linkStyle}
      >
        Nous joindre
      </Link>
    </>)
  }
  
  return (
      <div className={'flex z-10 justify-between h-10 relative rounded m-2.5 shadow-header bg-beton'}>
        <img src="/favicon.webp" alt="Logo"/>
        <div className={'flex gap-6 items-center justify-center pr-2 max-sm:hidden'}>
          {MenuOptions()}
        </div>
        <button className='pr-2 sm:hidden' onClick={() => setIsMenuOpen(true)}>
          <MenuIcon />
        </button>
        <div className={`flex flex-col fixed top-0 right-[50vw] bg-white w-[50vw] 
                items-center h-full justify-around transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-[50vw]' : 'translate-x-[100vw]'}
                sm:hidden shadow-header bg-beton rounded
                `}>
          <button className='absolute top-2 right-2' onClick={() => setIsMenuOpen(false)}><CloseIcon fontSize='large'/></button>
          {MenuOptions()}
          <img src="/favicon.webp" alt="Logo"/>
        </div>
      </div>
  )
}

const activeLinkStyle = {
  color: 'blue',
  fontWeight: 'bold',
  textDecoration: 'none',
}

const linkStyle = {
  textDecoration: 'none',
}

export default Header

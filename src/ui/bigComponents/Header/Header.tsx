import Link from 'next/link'
import { CSSProperties, FunctionComponent, PropsWithChildren } from 'react'

interface HeaderProps {
  current: string
}

const Header: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
  current,
}) => {
  return (
    <div className={'flex gap-6 z-10 items-center justify-center h-10 relative overflow-auto rounded m-2.5 shadow-header bg-beton'}>
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

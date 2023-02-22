import { CSSProperties, FunctionComponent, PropsWithChildren } from 'react'
import Socials from '../smallComponents/Socials'

interface HeaderProps {}

const Footer: FunctionComponent<PropsWithChildren<HeaderProps>> = () => {
  return (
    <div style={parent}>
      <p>Suivez-nous sur nos réseaux sociaux!</p>
      <Socials />
    </div>
  )
}

// css class for the parent div
const parent: CSSProperties | undefined = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f8fa',
  width: '100%',
  gap: '10px',
  paddingTop: '10px',
  fontSize: '1.2em',
}

export default Footer

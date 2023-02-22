import { CSSProperties, FunctionComponent, PropsWithChildren } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import styles from 'styles/ui/smallComponents/Socials.module.css'
import Link from 'next/link'

interface SocialsProps {}
const Socials: FunctionComponent<PropsWithChildren<SocialsProps>> = ({}) => {
  return (
    <div className={styles.iconContainer}>
      <Link href="https://facebook.com/ulcanoe" target="_blank">
        <FacebookIcon fontSize="large" />
      </Link>
      <Link href="https://www.instagram.com/ulconcretecanoe" target="_blank">
        <InstagramIcon fontSize="large" />
      </Link>
      <Link href="https://www.linkedin.com/company/ulcanoe" target="_blank">
        <LinkedInIcon fontSize="large" />
      </Link>
      <Link href="https://twitter.com/lavalcanoe" target="_blank">
        <TwitterIcon fontSize="large" />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCgIRFEE_HNiFRyxmSYGLtBA"
        target="_blank"
      >
        <YouTubeIcon fontSize="large" />
      </Link>
      <Link
        href="https://open.spotify.com/playlist/2g8USlk467kuJrvBLXVVlw?si=jn2vzMMvSY6VzNFdsbRXMA&utm_source=native-share-menu&nd=1"
        target="_blank"
      >
        <LibraryMusicIcon fontSize="large" />
      </Link>
    </div>
  )
}

export default Socials

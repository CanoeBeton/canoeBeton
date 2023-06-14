import React from 'react'
import Link from 'next/link'
import style from './AdminNavBar.module.css'

interface AdminNavBarProps {
  selected: 'boat' | 'member' | 'tournament' | 'partenaire' | 'event' | 'year'
}

const AdminNavBar = ({ selected }: AdminNavBarProps) => {
  return (
    <div className={style.navbar}>
      <Link
        href="/admin/member"
        className={selected === 'member' ? style.selected : ''}
      >
        Membres
      </Link>
      <Link
        href="/admin/tournament"
        className={selected === 'tournament' ? style.selected : ''}
      >
        Tournois
      </Link>
      <Link
        href="/admin/boat"
        className={selected === 'boat' ? style.selected : ''}
      >
        Bateau
      </Link>
      <Link
        href="/admin/partenaire"
        className={selected === 'partenaire' ? style.selected : ''}
      >
        Partenaires
      </Link>
      <Link
        href="/admin/event"
        className={selected === 'event' ? style.selected : ''}
      >
        Évènements
      </Link>
      <Link
        href="/admin/year"
        className={selected === 'year' ? style.selected : ''}
      >
        Années
      </Link>
      <Link href="/">Accueil</Link>
    </div>
  )
}

export default AdminNavBar

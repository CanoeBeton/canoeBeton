import React from 'react'
import Link from 'next/link'
import style from './AdminNavBar.module.css'

const AdminNavBar = () => {
  return (
    <div className={style.navbar}>
      <Link href="/admin/member">Membres</Link>
      <Link href="/admin/tournament">Tournois</Link>
      <Link href="/admin/boat">Bateau</Link>
      <Link href="/admin/partenaire">Partenaires</Link>
      <Link href="/admin/event">Évènements</Link>
      <Link href="/admin/year">Années</Link>
      <Link href="/">Accueil</Link>
    </div>
  )
}

export default AdminNavBar

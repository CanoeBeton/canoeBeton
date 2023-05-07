import React from 'react'
import Link from 'next/link'
import style from './AdminNavBar.module.css'

const AdminNavBar = () => {
  return (
    <div className={style.navbar}>
      <Link href="/admin/Member">Membres</Link>
      <Link href="/admin/Rournament">Tournois</Link>
      <Link href="/admin/Boat">Bateau</Link>
      <Link href="/admin/Partenaire">Partenaires</Link>
      <Link href="/admin/Event">Evenements</Link>
      <Link href="/admin/Year">Années</Link>
      <Link href="/">Accueil</Link>
    </div>
  )
}

export default AdminNavBar

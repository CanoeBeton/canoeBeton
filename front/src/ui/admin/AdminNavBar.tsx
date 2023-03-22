import React from 'react'
import Link from 'next/link'
import style from './AdminNavBar.module.css'

const AdminNavBar = () => {
  return (
    <div className={style.navbar}>
      <Link href="/admin/tournament">Tournois</Link>
      <Link href="/admin/member">Membres</Link>
      <Link href="/admin/boat">Bateau</Link>
    </div>
  )
}

export default AdminNavBar

import React, { ButtonHTMLAttributes } from 'react'
import AdminNavBar from './AdminNavBar'
import { Member } from '../../domain/Member'
// import { Boat } from '../../domain/Boat'
import { Tournament } from '../../domain/Tournament'
import { useRouter } from 'next/router'

interface AdminPageProps {
  what: 'boat' | 'member' | 'tournament'
  allEntities: Member[] | Tournament[]
}

const AdminPage = ({ what, allEntities }: AdminPageProps) => {
  const router = useRouter()
  const modifyClickHandler = (e: any) => {
    router.push(`/admin/${what}/${e.target.id}`)
  }
  return (
    <div>
      <AdminNavBar />
      <button>Ajouter un {what}</button>
      <div>
        {allEntities.map((entity) => {
          return (
            <div key={entity.id}>
              {entity.name}
              <button id={entity.id} onClick={modifyClickHandler}>
                Modifier
              </button>
              <button>Supprimer</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AdminPage

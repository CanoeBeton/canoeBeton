import React, { ButtonHTMLAttributes } from 'react'
import AdminNavBar from './AdminNavBar'
import { Member } from '../../domain/Member'
import { Boat } from '../../domain/Boat'
import { Tournament } from '../../domain/Tournament'
import { useRouter } from 'next/router'

interface AdminPageProps {
  what: 'boat' | 'member' | 'tournament'
  allEntities: Member[] | Tournament[] | Boat[]
}

const AdminPage = ({ what, allEntities }: AdminPageProps) => {
  const router = useRouter()

  const modifyClickHandler = (e: any) => {
    console.log(e.target.id)
    router.push(`/admin/${what}/${e.target.id}`)
  }

  return (
    <div>
      <AdminNavBar />
      <button>Ajouter un {what}</button>
      <div className=" flex flex-col gap-1 justify-center">
        {allEntities.map((entity) => {
          //if entity is a boat use name as key else use id as key
          if (what === 'boat') {
            return (
              <div
                className=" flex justify-center justify-around border"
                key={entity.name}
              >
                {entity.name}
                <button id={entity.name} onClick={modifyClickHandler}>
                  Modifier
                </button>
                <button>Supprimer</button>
              </div>
            )
          }

          return (
            <div
              key={entity.id}
              className=" flex justify-center justify-around border"
            >
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

import React, { ButtonHTMLAttributes } from 'react'
import AdminNavBar from './AdminNavBar'
import { Member } from '../../domain/Member'
import { Boat } from '../../domain/Boat'
import { Tournament } from '../../domain/Tournament'
import { useRouter } from 'next/router'

interface AdminPageProps {
  what: 'boat' | 'member' | 'tournament'
  allEntities: Member[] | Tournament[] | Boat[]
  deleteAllFunc: (ids: string[]) => void
}

const AdminPage = ({ what, allEntities, deleteAllFunc }: AdminPageProps) => {
  const router = useRouter()
  const [selectedForDeletion, setSelectedForDeletion] = React.useState<
    string[]
  >([])

  const modifyClickHandler = (e: any) => {
    console.log(e.target.id)
    router.push(`/admin/${what}/${e.target.id}`)
  }

  const removeHandler = (selId: string) => {
    if (selectedForDeletion.includes(selId)) {
      setSelectedForDeletion(selectedForDeletion.filter((id) => id !== selId))
    } else {
      setSelectedForDeletion([...selectedForDeletion, selId])
    }
  }

  const deleteAll = () => {
    deleteAllFunc(selectedForDeletion)
    location.reload()
  }

  const modifyBtnStyle =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
  const deleteBtnStyle =
    'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
  const nameStyle = 'w-1/2 text-center text-xl '
  let mappedEntities

  if (what === 'boat') {
    mappedEntities = allEntities.map((entity) => {
      return (
        <div
          className={` flex  justify-around border border-gray-400 p-1 ${
            selectedForDeletion.includes(entity.name) ? ' bg-red-500' : ''
          }`}
          key={entity.name}
        >
          <p className={nameStyle}>{entity.name}</p>
          <button
            id={entity.name}
            onClick={modifyClickHandler}
            className={modifyBtnStyle}
          >
            Modifier
          </button>
          <button
            onClick={() => removeHandler(entity.name)}
            className={deleteBtnStyle}
          >
            Supprimer
          </button>
        </div>
      )
    })
  } else {
    mappedEntities = allEntities.map((entity: any) => {
      return (
        <div
          className={` flex  justify-around border border-gray-400 p-1 ${
            selectedForDeletion.includes(entity.id) ? ' bg-red-500' : ''
          }`}
          key={entity.id}
        >
          <p className={nameStyle}>{entity.name}</p>
          <button
            id={entity.id}
            onClick={modifyClickHandler}
            className={modifyBtnStyle}
          >
            Modifier
          </button>
          <button
            onClick={() => removeHandler(entity.id)}
            className={deleteBtnStyle}
          >
            Supprimer
          </button>
        </div>
      )
    })
  }

  return (
    <div>
      <AdminNavBar />
      <div className=" flex gap-5">
        <button>Ajouter un {what}</button>
        <button
          {...(selectedForDeletion.length > 0 ? {} : { disabled: true })}
          className=" disabled:text-gray-300"
          onClick={deleteAll}
        >
          Confirmer suppression
        </button>
      </div>
      <div className=" flex flex-col gap-1 justify-center mx-72">
        {mappedEntities}
      </div>
    </div>
  )
}

export default AdminPage

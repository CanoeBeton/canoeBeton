import React, { ButtonHTMLAttributes } from 'react'
import AdminNavBar from './AdminNavBar'
import { Member } from '../../domain/Member'
import { Boat } from '../../domain/Boat'
import { Tournament } from '../../domain/Tournament'
import { useRouter } from 'next/router'
import { Partenaire } from '../../domain/Partenaire'
import { Event } from '../../domain/Event'
import { addYearMember } from '../../api/year'

interface AdminPageProps {
  what: 'boat' | 'member' | 'tournament' | 'partenaire' | 'event'
  allEntities: Member[] | Tournament[] | Boat[] | Partenaire[] | Event[]
  deleteAllFunc: (ids: string[]) => void
  keyPropriety: string
}

const AdminPage = ({
  what,
  allEntities,
  deleteAllFunc,
  keyPropriety,
}: AdminPageProps) => {
  const mapWhatToTitle = (what: string) => {
    switch (what) {
      case 'boat':
        return 'bateau'
      case 'member':
        return 'membre'
      case 'tournament':
        return 'tournoi'
      case 'partenaire':
        return 'partenaire'
      case 'event':
        return 'évènement'
    }
  }
  const router = useRouter()
  const [selectedForDeletion, setSelectedForDeletion] = React.useState<
    string[]
  >([])

  const modifyClickHandler = (e: any) => {
    console.log(e.target.id)
    router.push(`${what}/${e.target.id}`)
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

  let mappedEntities = allEntities.map((entity: any) => {
    return (
      <div
        className={` flex  justify-around border border-gray-400 p-1 ${
          selectedForDeletion.includes(entity[keyPropriety])
            ? ' bg-red-500'
            : 'bg-white'
        }`}
        key={entity[keyPropriety]}
      >
        <p className={nameStyle}>{entity.name}</p>
        <button
          id={entity[keyPropriety]}
          onClick={modifyClickHandler}
          className={modifyBtnStyle}
        >
          Modifier
        </button>
        <button
          onClick={() => removeHandler(entity[keyPropriety])}
          className={deleteBtnStyle}
        >
          Supprimer
        </button>
        {what === 'member' && (
          <button
            className="text-xs bg-green-500 p-2 text-white rounded"
            onClick={() => addYearMember(new Date().getFullYear(), entity.id)}
          >
            Associer avec {new Date().getFullYear()}
          </button>
        )}
      </div>
    )
  })

  return (
    <div>
      <AdminNavBar />
      <div className=" flex gap-5">
        <button
          className="p-2 m-1 rounded-sm border-green-500 border-2 bg-white"
          onClick={() => router.push(`/admin/new/${what}`)}
        >
          Ajouter un {mapWhatToTitle(what)}
        </button>
        <button
          {...(selectedForDeletion.length > 0 ? {} : { disabled: true })}
          className=" disabled:invisible p-2 m-1 rounded-sm border-red-500 border-2 bg-white "
          onClick={deleteAll}
        >
          Confirmer suppression
        </button>
      </div>
      <div className=" flex flex-col gap-1 justify-center xl:mx-72 mx-52">
        {mappedEntities}
      </div>
    </div>
  )
}
export default AdminPage

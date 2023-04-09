import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getTournament } from '../../../src/api/tournament'
import { useQuery } from 'react-query'
import boat from '../boat'

const TournamentInfo = () => {
  const router = useRouter()
  const { id } = router.query as { id: string }
  const { data: tournament, status } = useQuery({
    queryFn: () => getTournament(id),
  })

  const handleSubmit = (e: any) => {}

  const divStyle = 'flex flex-col gap-2 justify-between '
  const inputStyle = 'border-2 border-gray-300 rounded-md p-2 w-full'
  return (
    <div className="mt-5">
      {status === 'success' ? (
        <div>
          <form className="mx-5">
            <div className="md:columns-2">
              <div className={divStyle}>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={tournament.name}
                  className={inputStyle}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="year">Année</label>
                <input
                  type="number"
                  name="year"
                  id="year"
                  placeholder={tournament.year.toString()}
                  className={inputStyle}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="position">Position</label>
                <input
                  type="number"
                  name="position"
                  id="position"
                  placeholder={tournament.position.toString()}
                  className={inputStyle}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="localisation">Endroit</label>
                <input
                  type="text"
                  name="localisation"
                  id="localisation"
                  placeholder={tournament.localisation}
                  className={inputStyle}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder={tournament.description}
                  className={inputStyle}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className={inputStyle}
                />
              </div>
            </div>
            <div className="flex mt-5 justify-around">
              <button
                className="w-1/3 rounded bg-blue-500 p-2"
                onClick={handleSubmit}
              >
                Appliquer
              </button>
              <Link
                className="w-1/3 text-center rounded bg-red-500 p-2"
                href="/admin/tournament"
              >
                Retour
              </Link>
            </div>
          </form>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  )
}

export default TournamentInfo

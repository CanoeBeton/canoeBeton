import React from 'react'
import { useQuery } from 'react-query'
import { getMelangesByBoat, updateMelange } from '../../../../src/api/melange'
import { useRouter } from 'next/router'
import Link from 'next/link'

const MelangeList = () => {
  const router = useRouter()
  const { boatName } = router.query as { boatName: string }
  const { data: melanges, status } = useQuery({
    queryFn: () => getMelangesByBoat(boatName),
  })

  const handleSubmit = (e: any, title: string) => {
    e.preventDefault()
    let res = { boat_name: boatName, title: title } as any
    for (const input of e.target.form) {
      if (input.value !== '' && input.name) {
        res[input.name] = input.value
      } else {
        res[input.name] = input.placeholder
      }
    }

    updateMelange(res)
  }

  return (
    <div>
      {status === 'success' ? (
        <div className="">
          <h1 className="text-2xl">{boatName}</h1>

          {melanges.map((melange) => (
            <div className="mx-5 my-10" key={melange.title}>
              <h2 className="text-xl">{melange.title}</h2>
              <form id="form">
                <div>
                  {' '}
                  <label htmlFor="masse_volumique_seche">
                    masse_volumique_seche
                  </label>
                  <input
                    type="text"
                    name="masse_volumique_seche"
                    placeholder={melange.masse_volumique_seche}
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="resistance_compression">
                    resistance_compression
                  </label>
                  <input
                    type="text"
                    name="resistance_compression"
                    placeholder={melange.resistance_compression}
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="resistance_tension">resistance_tension</label>
                  <input
                    type="text"
                    name="resistance_tension"
                    placeholder={melange.resistance_tension}
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="module_young">module_young</label>
                  <input
                    type="text"
                    name="module_young"
                    placeholder={melange.module_young}
                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
                <button
                  className="w-1/3 rounded bg-blue-500 p-2"
                  onClick={(e) => handleSubmit(e, melange.title)}
                  type="button"
                >
                  Appliquer
                </button>
              </form>
            </div>
          ))}
          <div className="flex mt-5 justify-around">
            <Link
              className="w-1/3 text-center rounded bg-red-500 p-2"
              href={`/admin/boat/${boatName}`}
            >
              Retour
            </Link>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default MelangeList

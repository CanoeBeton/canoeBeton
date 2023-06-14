import React from 'react'
import { getYears, activateYear } from '../../src/api/year'
import { useQuery } from 'react-query'
import AdminNavBar from '../../src/ui/admin/AdminNavBar'
import { useRouter } from 'next/router'

const Year = () => {
  const router = useRouter()

  const { data: allYears, status } = useQuery({ queryFn: () => getYears() })

  const clickHandler = (year: number) => {
    router.push(`/admin/year/${year}`)
  }

  const activateHandler = (year: number) => {
    activateYear(year).then((res) => {
      location.reload()
    })
  }

  return (
    <div>
      <div className="flex justify-between m-2">
        <AdminNavBar />
        <button className="" onClick={() => router.push('/admin/new/year')}>
          Nouvelle année
        </button>
      </div>
      <div className="m-5">
        {status === 'success' ? (
          allYears
            .sort((a, b) => b.year - a.year)
            .map((year) => {
              return (
                <div key={year.year} className="flex gap-3 mt-1">
                  <div
                    className={` grow bg-white/50 p-5 hover:bg-green-400/75 ${
                      year.active ? 'bg-green-300' : ''
                    }`}
                    onClick={() => {
                      clickHandler(year.year)
                    }}
                  >
                    <div className="flex justify-between">
                      <div className="flex gap-5">
                        <p>{year.year}</p>
                        <p>{year.boat_name}</p>
                        <img src={year.icone} alt="icone" width={50} />
                      </div>

                      <p className="text-xs text-black/40">
                        cliquer pour les details
                      </p>
                    </div>
                  </div>
                  <button
                    className=" bg-yellow-400 p-3 disabled:bg-yellow-400/25 disabled:text-black/40"
                    disabled={year.active}
                    onClick={() => {
                      activateHandler(year.year)
                    }}
                    type="button"
                  >
                    Activer
                  </button>
                </div>
              )
            })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}

export default Year

import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getBoat, modifyBoat } from '../../../src/api/boat'
import { useQuery } from 'react-query'
import { Boat } from '../../../src/domain/Boat'

const BoatInfo = () => {
  const router = useRouter()
  const { id } = router.query as { id: string }

  const { data: boat, status } = useQuery({ queryFn: () => getBoat(id) })
  const handleSubmit = (e: any) => {
    e.preventDefault()
    let res = {} as Boat
    for (const input of e.target.form) {
      if (input.value !== '' && input.name) {
        // console.log(input.name, input.value)
        res[input.name] = input.value
      } else {
        // console.log(input.name, input.placeholder)
        res[input.name] = input.placeholder
      }
    }

    modifyBoat(res)
    // location.reload()
  }
  const divStyle = ' flex flex-col gap-2 justify-between '
  const inputStyle = 'border-2 border-gray-300 rounded-md p-2 w-full'
  return (
    <div className="mt-5">
      {status === 'success' && boat ? (
        <div>
          <form className="  mx-5" id="form">
            <div className="lg:columns-3 md:columns-2">
              <div className={divStyle}>
                <label htmlFor="name">Nom</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="name"
                  id="name"
                  placeholder={boat.name}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="poids">Poids</label>
                <input
                  className={inputStyle}
                  type="number"
                  name="poids"
                  id="poids"
                  placeholder={boat.poids.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="longueur">Longueur</label>
                <input
                  className={inputStyle}
                  type="number"
                  name="longueur"
                  id="longueur"
                  placeholder={boat.longueur.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="largeur">Largeur</label>
                <input
                  className={inputStyle}
                  type="number"
                  name="largeur"
                  id="largeur"
                  placeholder={boat.largeur.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="profondeur">Profondeur</label>
                <input
                  className={inputStyle}
                  type="number"
                  name="profondeur"
                  id="profondeur"
                  placeholder={boat.profondeur.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="epaisseur">Epaisseur</label>
                <input
                  className={inputStyle}
                  type="number"
                  name="epaisseur"
                  id="epaisseur"
                  placeholder={boat.epaisseur.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="couleur_exterieure">Couleur extérieure</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="couleur_exterieure"
                  id="couleur_exterieure"
                  placeholder={boat.couleur_exterieure}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="couleur_interieure">Couleur intérieure</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="couleur_interieure"
                  id="couleur_interieure"
                  placeholder={boat.couleur_interieure}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="renforcement">Renforcement</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="renforcement"
                  id="renforcement"
                  placeholder={boat.renforcement}
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
                href="/admin/boat"
              >
                Retour
              </Link>
            </div>
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default BoatInfo

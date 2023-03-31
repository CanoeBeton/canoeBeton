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
    <div>
      {status === 'success' && boat ? (
        <div>
          <form className="  mx-5">
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
              <div className={divStyle}>
                <label htmlFor="masse_volumique_seche_1">
                  Masse volumique sèche 1
                </label>
                <input
                  className={inputStyle}
                  type="number"
                  name="masse_volumique_seche_1"
                  id="masse_volumique_seche_1"
                  placeholder={boat.masse_volumique_seche_1.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="resistance_compression_1">
                  Résistance compression 1
                </label>
                <input
                  className={inputStyle}
                  type="number"
                  name="resistance_compression_1"
                  id="resistance_compression_1"
                  placeholder={boat.resistance_compression_1.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="resistance_tension_1">
                  Résistance tension 1
                </label>
                <input
                  className={inputStyle}
                  type="number"
                  name="resistance_tension_1"
                  id="resistance_tension_1"
                  placeholder={boat.resistance_tension_1.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="module_young_1">Module young 1</label>
                <input
                  className={inputStyle}
                  type="number"
                  name="module_young_1"
                  id="module_young_1"
                  placeholder={boat.module_young_1.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="masse_volumique_seche_2">
                  Masse volumique sèche 2
                </label>
                <input
                  className={inputStyle}
                  type="number"
                  name="masse_volumique_seche_2"
                  id="masse_volumique_seche_2"
                  placeholder={boat.masse_volumique_seche_2.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="resistance_compression_2">
                  Résistance compression 2
                </label>
                <input
                  className={inputStyle}
                  type="number"
                  name="resistance_compression_2"
                  id="resistance_compression_2"
                  placeholder={boat.resistance_compression_2.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="resistance_tension_2">
                  Résistance tension 2
                </label>
                <input
                  className={inputStyle}
                  type="number"
                  name="resistance_tension_2"
                  id="resistance_tension_2"
                  placeholder={boat.resistance_tension_2.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="module_young_2">Module young 2</label>
                <input
                  className={inputStyle}
                  type="number"
                  name="module_young_2"
                  id="module_young_2"
                  placeholder={boat.module_young_2.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="masse_volumique_seche_3">
                  Masse volumique sèche 3
                </label>
                <input
                  className={inputStyle}
                  type="number"
                  name="masse_volumique_seche_3"
                  id="masse_volumique_seche_3"
                  placeholder={boat.masse_volumique_seche_3.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="resistance_compression_3">
                  Résistance compression 3
                </label>
                <input
                  className={inputStyle}
                  type="number"
                  name="resistance_compression_3"
                  id="resistance_compression_3"
                  placeholder={boat.resistance_compression_3.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="resistance_tension_3">
                  Résistance tension 3
                </label>
                <input
                  className={inputStyle}
                  type="number"
                  name="resistance_tension_3"
                  id="resistance_tension_3"
                  placeholder={boat.resistance_tension_3.toString()}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="module_young_3">Module young 3</label>
                <input
                  className={inputStyle}
                  type="number"
                  name="module_young_3"
                  id="module_young_3"
                  placeholder={boat.module_young_3.toString()}
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

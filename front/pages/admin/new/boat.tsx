import React, { useState } from 'react'
import { addBoat } from '../../../src/api/boat'
import { useRouter } from 'next/router'
import NewMelange from '../../../src/ui/admin/NewMelange'
import { addMelanges } from '../../../src/api/melange'
import { Melange } from '../../../src/domain/Melange'

const boat = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [poids, setPoids] = useState('')
  const [longueur, setLongueur] = useState('')
  const [largeur, setLargeur] = useState('')
  const [profondeur, setProfondeur] = useState('')
  const [epaisseur, setEpaisseur] = useState('')
  const [couleur_exterieure, setCouleur_exterieure] = useState('')
  const [couleur_interieure, setCouleur_interieure] = useState('')
  const [renforcement, setRenforcement] = useState('')
  const [allMelanges, setAllMelanges] = useState<Melange[]>([])

  const newMelange = (melange: Melange) => {
    setAllMelanges([...allMelanges, melange])
  }

  const sumbitHandler = (e: any) => {
    e.preventDefault()
    const res = {
      name: name,
      poids: poids,
      longueur: longueur,
      largeur: largeur,
      profondeur: profondeur,
      epaisseur: epaisseur,
      couleur_exterieure: couleur_exterieure,
      couleur_interieure: couleur_interieure,
      renforcement: renforcement,
    }

    addBoat(res)
    addMelanges(allMelanges)
    router.push('/admin/boat')
  }

  return (
    <div className="m-2 mb-8">
      <h1 className="text-2xl">Nouveau Bateau</h1>
      <form onSubmit={sumbitHandler} className=" flex flex-col m-4 gap-2">
        <p>Nom</p>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Poids</p>
        <input
          type="text"
          name="poids"
          placeholder="poids"
          onChange={(e) => setPoids(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Longueur</p>
        <input
          type="text"
          name="longueur"
          placeholder="longueur"
          onChange={(e) => setLongueur(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Largeur</p>
        <input
          type="text"
          name="largeur"
          placeholder="largeur"
          onChange={(e) => setLargeur(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Profondeur</p>
        <input
          type="text"
          name="profondeur"
          placeholder="profondeur"
          onChange={(e) => setProfondeur(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Epaisseur</p>
        <input
          type="text"
          name="epaisseur"
          placeholder="epaisseur"
          onChange={(e) => setEpaisseur(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Couleur exterieure</p>
        <input
          type="text"
          name="couleur_exterieure"
          placeholder="couleur_exterieure"
          onChange={(e) => setCouleur_exterieure(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Couleur interieure</p>
        <input
          type="text"
          name="couleur_interieure"
          placeholder="couleur_interieure"
          onChange={(e) => setCouleur_interieure(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Renforcement</p>
        <input
          type="text"
          name="renforcement"
          placeholder="renforcement"
          onChange={(e) => setRenforcement(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <div>
          <h2 className="mt-5 text-xl">
            Mélange{allMelanges.length > 1 ? 's' : ''}
          </h2>
          <div>
            {allMelanges.map((melange) => (
              <p key={melange.title}>
                {melange.title}, {melange.resistance_tension},{' '}
                {melange.resistance_compression},{' '}
                {melange.masse_volumique_seche}, {melange.module_young}
              </p>
            ))}
          </div>
        </div>
      </form>
      <NewMelange boat_name={name} addMelange={newMelange} />
      <button
        onClick={sumbitHandler}
        className="bg-blue-500 disabled:bg-blue-500/25 text-white font-bold py-2 px-4 rounded w-full"
        disabled={
          !name ||
          !poids ||
          !longueur ||
          !largeur ||
          !profondeur ||
          !epaisseur ||
          !couleur_exterieure ||
          !couleur_interieure ||
          !renforcement ||
          allMelanges.length === 0
        }
      >
        Nouveau Bateau
      </button>
      <button
        onClick={() => router.push('/admin/boat')}
        className="bg-red-500 disabled:bg-red-500/25 text-white font-bold py-2 px-4 rounded w-full"
      >
        Annuler
      </button>
    </div>
  )
}

export default boat

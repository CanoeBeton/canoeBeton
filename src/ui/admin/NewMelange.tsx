import React from 'react'
import { useState } from 'react'
interface Melange {
  boat_name: string
  title: string
  masse_volumique_seche: string
  resistance_compression: string
  resistance_tension: string
  module_young: string
}
interface Props {
  boat_name: string
  addMelange: (melange: Melange) => void
}
const NewMelange = ({ boat_name, addMelange }: Props) => {
  const [title, setTitle] = useState('')
  const [masse_volumique_seche, setMasse_volumique_seche] = useState('')
  const [resistance_compression, setResistance_compression] = useState('')
  const [resistance_tension, setResistance_tension] = useState('')
  const [module_young, setModule_young] = useState('')

  const sumbitHandler = (e: any) => {
    e.preventDefault()
    addMelange({
      boat_name: boat_name,
      title: title,
      masse_volumique_seche: masse_volumique_seche,
      resistance_compression: resistance_compression,
      resistance_tension: resistance_tension,
      module_young: module_young,
    })
  }

  return (
    <div>
      <form onSubmit={sumbitHandler} className="flex flex-col m-4 gap-2 ">
        <p>Nom</p>
        <input
          type="text"
          name="title"
          placeholder="titre"
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Masse volumique seche</p>
        <input
          type="text"
          name="masse_volumique_seche"
          placeholder="masse_volumique_seche"
          onChange={(e) => setMasse_volumique_seche(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Resistance compression</p>
        <input
          type="text"
          name="resistance_compression"
          placeholder="resistance_compression"
          onChange={(e) => setResistance_compression(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Resistance tension</p>
        <input
          type="text"
          name="resistance_tension"
          placeholder="resistance_tension"
          onChange={(e) => setResistance_tension(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Module young</p>
        <input
          type="text"
          name="module_young"
          placeholder="module_young"
          onChange={(e) => setModule_young(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <button
          disabled={
            !title ||
            !masse_volumique_seche ||
            !resistance_compression ||
            !resistance_tension ||
            !module_young
          }
          onClick={sumbitHandler}
          className="bg-green-500 disabled:bg-green-500/25 text-white rounded-md p-2 w-full"
        >
          Ajouter melange
        </button>
      </form>
    </div>
  )
}

export default NewMelange

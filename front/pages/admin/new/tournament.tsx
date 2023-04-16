import React, { useState } from 'react'
import { addTournament } from '../../../src/api/tournament'
import { useRouter } from 'next/router'

interface Tournament {
  id: string
  name: string
  year: number
  position: number
  localisation: string
  description: string
  date: Date
}

const tournament = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [position, setPosition] = useState('')
  const [localisation, setLocalisation] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const sumbitHandler = (e: any) => {
    e.preventDefault()
    const res = {
      name: name,
      year: year,
      position: position,
      localisation: localisation,
      description: description,
      date: date,
    }
    addTournament(res)
    // router.push('/admin/tournament')
  }

  return (
    <div className="m-4">
      <h1 className="text-2xl">Nouveau Tournoi</h1>
      <form onSubmit={sumbitHandler} className=" flex flex-col gap-2">
        <p>Nom</p>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Année</p>
        <input
          type="text"
          name="year"
          placeholder="year"
          onChange={(e) => setYear(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Position</p>
        <input
          type="text"
          name="position"
          placeholder="position"
          onChange={(e) => setPosition(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Localisation</p>
        <input
          type="text"
          name="localisation"
          placeholder="localisation"
          onChange={(e) => setLocalisation(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Description</p>
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Date (aaaa-mm-jj)</p>
        <input
          type="text"
          name="date"
          placeholder="date"
          onChange={(e) => setDate(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 disabled:bg-blue-500/25 text-white font-bold py-2 px-4 rounded w-full"
          disabled={
            !name ||
            !year ||
            !position ||
            !localisation ||
            !description ||
            !date
          }
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default tournament

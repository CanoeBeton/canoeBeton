import React, { useState, useMemo } from 'react'
import { addYear } from '../../../src/api/year'
import { useRouter } from 'next/router'
import Dropzone, { DropzoneState } from 'react-dropzone'

interface Year {
  year: number
  boat_name: string
  partenaire_mosaique: string
  active: boolean
  icone: string
}

const year = () => {
  const router = useRouter()
  const [year, setYear] = useState<Year>({
    year: new Date().getFullYear(),
    boat_name: '',
    partenaire_mosaique: '',
    active: false,
    icone: '',
  })

  const handleDrop = (acceptedFiles: File[]) => {
    const reader = new FileReader()
    reader.readAsDataURL(acceptedFiles[0])
    reader.onload = () => {
      setYear({ ...year, icone: reader.result as string })
    }
  }

  const dropzone = useMemo(
    () => (
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }: DropzoneState) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Cliquer ici ou deposer une image</p>
          </div>
        )}
      </Dropzone>
    ),
    [handleDrop]
  )

  const handleDropMo = (acceptedFiles: File[]) => {
    const reader = new FileReader()
    reader.readAsDataURL(acceptedFiles[0])
    reader.onload = () => {
      setYear({ ...year, partenaire_mosaique: reader.result as string })
    }
  }

  const dropzoneMo = useMemo(
    () => (
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }: DropzoneState) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Cliquer ici ou deposer une image</p>
          </div>
        )}
      </Dropzone>
    ),
    [handleDropMo]
  )
  return (
    <div>
      <h1>Nouvelle année</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addYear(year).then((res) => {
            router.push('/admin/year')
          })
        }}
        className="flex flex-col m-4 gap-2"
      >
        <p>Année</p>
        <input
          type="number"
          name="year"
          placeholder="year"
          onChange={(e) => setYear({ ...year, year: parseInt(e.target.value) })}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Nom du bateau</p>
        <input
          type="text"
          name="boat_name"
          placeholder="boat_name"
          onChange={(e) => setYear({ ...year, boat_name: e.target.value })}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Partenaire de la mosaique</p>
        <div className="border-2 border-gray-300 rounded-md p-2 w-full">
          {dropzoneMo}
          {year.partenaire_mosaique.length > 0 && (
            <img src={year.icone} alt="" />
          )}
        </div>
        <p>Active</p>
        <input
          type="checkbox"
          name="active"
          placeholder="active"
          onChange={(e) => setYear({ ...year, active: e.target.checked })}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Icone</p>
        <div className="border-2 border-gray-300 rounded-md p-2 w-full">
          {dropzone}
          {year.partenaire_mosaique.length > 0 && (
            <img src={year.icone} alt="" />
          )}
        </div>
        <button
          disabled={
            !year.year ||
            !year.partenaire_mosaique ||
            !year.icone ||
            !year.boat_name
          }
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 disabled:bg-blue-500/25"
        >
          Ajouter
        </button>
      </form>
      <button
        onClick={() => router.push('/admin/year')}
        className="bg-red-500 disabled:bg-red-500/25 text-white font-bold py-2 px-4 rounded w-full"
      >
        Annuler
      </button>
    </div>
  )
}

export default year

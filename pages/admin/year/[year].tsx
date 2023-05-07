import React, { useState, useMemo } from 'react'
import { getYear, modifyYear } from '../../../src/api/year'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import Dropzone, { DropzoneState } from 'react-dropzone'
import Link from 'next/link'
import { Year } from '../../../src/domain/Year'

const YearInfo = () => {
  const router = useRouter()
  const { year } = router.query as { year: string }
  const [mosaique, setMosaique] = useState<string | null>(null)

  const handleDropMosaique = (acceptedFiles: File[]) => {
    const reader = new FileReader()
    reader.readAsDataURL(acceptedFiles[0])
    reader.onload = () => {
      setMosaique(reader.result as string)
    }
  }

  const dropzone = useMemo(
    () => (
      <Dropzone onDrop={handleDropMosaique}>
        {({ getRootProps, getInputProps }: DropzoneState) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>
              <span className="text-blue-500">Cliquer ici</span> ou deposer une
              image - Mosaique des partenaires
            </p>
          </div>
        )}
      </Dropzone>
    ),
    [handleDropMosaique]
  )

  const [icone, setIcone] = useState<string | null>(null)

  const handleDropIcone = (acceptedFiles: File[]) => {
    const reader = new FileReader()
    reader.readAsDataURL(acceptedFiles[0])
    reader.onload = () => {
      setIcone(reader.result as string)
    }
  }

  const dropzoneIcone = useMemo(
    () => (
      <Dropzone onDrop={handleDropIcone}>
        {({ getRootProps, getInputProps }: DropzoneState) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>
              <span className="text-blue-500">Cliquer ici</span> ou deposer une
              image - Icone
            </p>
          </div>
        )}
      </Dropzone>
    ),
    [handleDropIcone]
  )

  const { data: yearInfo, status } = useQuery({ queryFn: () => getYear(+year) })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (status === 'success') {
      let res: {} = {
        year: yearInfo.year,
        partenaire_mosaique: (mosaique as string)
          ? (mosaique as string)
          : yearInfo.partenaire_mosaique,
        icone: (icone as string) ? (icone as string) : yearInfo.icone,
      }
      for (const input of e.target.form) {
        if (input.value) {
          res = { ...res, [input.name]: input.value }
        } else {
          res = { ...res, [input.name]: input.placeholder }
        }
      }
      modifyYear(res as Year)
    }
  }
  const divStyle = 'gap-2 justify-between '
  const inputStyle = 'border-2 border-gray-300 rounded-md p-2 w-full'

  return (
    <div>
      {status === 'success' ? (
        <div>
          <form className="mx-5">
            <div className="md:columns-2">
              <div className={divStyle}>
                <label htmlFor="year">Annee</label>
                <p className={inputStyle}>{yearInfo.year}</p>
              </div>
              <div className={divStyle}>
                <label htmlFor="boat_name">Nom du bateau</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="boat_name"
                  placeholder={yearInfo.boat_name}
                />
              </div>
              <div className={divStyle}>
                {dropzone}
                <p className={inputStyle}>
                  {mosaique ? mosaique.substring(0, 25) : '--'}
                </p>
              </div>
              <div className={divStyle}>
                {dropzoneIcone}
                <p className={inputStyle}>
                  {icone ? icone.substring(0, 25) : '--'}
                </p>
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
                href="/admin/Year"
              >
                Retour
              </Link>
              <button
                disabled={status !== 'success' ? true : false}
                className="w-1/5 rounded bg-green-300 p-2 disabled:bg-gray-500"
                type="button"
                onClick={() => {
                  if (year) setIcone(yearInfo.icone)
                }}
              >
                Voir icone
              </button>
              <button
                disabled={status !== 'success' ? true : false}
                className="w-1/5 rounded bg-green-300 p-2 disabled:bg-gray-500"
                type="button"
                onClick={() => {
                  if (year) setMosaique(yearInfo.partenaire_mosaique)
                }}
              >
                Voir mosaique
              </button>
            </div>
          </form>
          <div>
            {icone && (
              <div className="m-10">
                <p>Visualisation de l&apos;image:</p>
                <img src={icone} alt="uploaded" width={300} />
              </div>
            )}
            {mosaique && (
              <div className="m-10">
                <p>Visualisation de l&apos;image:</p>
                <img src={mosaique} alt="uploaded" width={300} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>Loading... {year}</div>
      )}
    </div>
  )
}

export default YearInfo

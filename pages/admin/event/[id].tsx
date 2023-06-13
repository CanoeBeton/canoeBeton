import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getEvent, modifyEvent } from '../../../src/api/event'
import { useQuery } from 'react-query'
import { Event } from '../../../src/domain/Event'
import Dropzone, { DropzoneState } from 'react-dropzone'

const EventInfo = () => {
  const router = useRouter()
  const { id } = router.query as { id: string }
  const { data: event, status } = useQuery({ queryFn: () => getEvent(id) })

  const [image, setImage] = useState<string | null>(null)

  const handleDrop = (acceptedFiles: File[]) => {
    const reader = new FileReader()
    reader.readAsDataURL(acceptedFiles[0])
    reader.onload = () => {
      setImage(reader.result as string)
    }
  }

  const dropzone = useMemo(
    () => (
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }: DropzoneState) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Cliquer ici ou deposer une image </p>
          </div>
        )}
      </Dropzone>
    ),
    [handleDrop]
  )

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (event) {
      let res = {
        id: event.id,
        image: (image as string) ? (image as string) : event.image,
      } as Event
      for (const input of e.target.form) {
        if (input.value !== '' && input.name) {
          // @ts-ignore
          res[input.name] = input.value
        } else {
          // @ts-ignore
          res[input.name] = input.placeholder
        }
      }

      modifyEvent(res)
    }
  }

  const divStyle = ' flex flex-col gap-2 justify-between no-wrap'
  const inputStyle = 'border-2 border-gray-300 rounded-md p-2 w-full'
  return (
    <div className="mt-5">
      {status === 'success' && event ? (
        <div>
          <form className="  mx-5" id="form">
            <div className="md:columns-2">
              <div className={divStyle}>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={event.name}
                  className={inputStyle}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="description">Description</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="description"
                  id="description"
                  placeholder={event.description}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="begin_date">Date début (aaa-mm-jj)</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="begin_date"
                  id="begin_date"
                  placeholder={
                    new Date(event.begin_date).getFullYear() +
                    '-' +
                    (new Date(event.begin_date).getMonth() + 1) +
                    '-' +
                    new Date(event.begin_date).getDate()
                  }
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="end_date">Date fin (aaaa-mm-jj)</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="end_date"
                  id="end_date"
                  placeholder={
                    new Date(event.end_date).getFullYear() +
                    '-' +
                    (new Date(event.end_date).getMonth() + 1) +
                    '-' +
                    new Date(event.end_date).getDate()
                  }
                />
              </div>
              <div className={divStyle}>
                {dropzone}
                <p className={inputStyle}>
                  {image ? image.substring(0, 25) : '--'}
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
                href="/admin/event"
              >
                Retour
              </Link>
              <button
                disabled={status !== 'success' ? true : false}
                className="w-1/5 rounded bg-green-300 p-2 disabled:bg-gray-500"
                type="button"
                onClick={() => {
                  if (event) setImage(event.image)
                }}
              >
                load
              </button>
            </div>
          </form>
          {image && (
            <div className="m-10">
              <p>Visualisation de l&apos;image:</p>
              <img src={image} alt="uploaded" width={300} />
            </div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default EventInfo

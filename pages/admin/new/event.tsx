import React, { useState, useMemo } from 'react'
import { addEvent } from '../../../src/api/event'
import { useRouter } from 'next/router'
import Dropzone, { DropzoneState } from 'react-dropzone'

const Event = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [begin_date, setBegin_date] = useState('')
  const [end_date, setEnd_date] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

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
            <p>Cliquer ici ou deposer une image</p>
          </div>
        )}
      </Dropzone>
    ),
    [handleDrop]
  )

  const sumbitHandler = (e: any) => {
    e.preventDefault()
    const res = {
      name: name,
      begin_date: begin_date,
      end_date: end_date,
      description: description,
      image: image,
    }
    addEvent(res).then((res) => {
      router.push('/admin/event')
    })
  }
  return (
    <div className=" m-4 ">
      <h1 className="text-2xl">Nouvel Evenement</h1>
      <form onSubmit={sumbitHandler} className="flex flex-col gap-2">
        <p>Nom</p>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Date de debut (aaaa-mm-jj)</p>
        <input
          type="text"
          name="begin_date"
          placeholder="begin_date"
          onChange={(e) => setBegin_date(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Date de fin (aaaa-mm-jj)</p>
        <input
          type="text"
          name="end_date"
          placeholder="end_date"
          onChange={(e) => setEnd_date(e.target.value)}
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
        <p>Image</p>
        <div className="border-2 border-gray-300 rounded-md p-2 w-full">
          {dropzone} {image.length > 0 && <img src={image} alt="" />}
        </div>

        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
          Ajouter
        </button>
      </form>
      <button
        onClick={() => router.push('/admin/event')}
        className="bg-red-500 disabled:bg-red-500/25 text-white font-bold py-2 px-4 rounded w-full"
      >
        Annuler
      </button>
    </div>
  )
}

export default Event

import React, { useState, useMemo } from 'react'
import { addPartenaire } from '../../../src/api/partenaire'
import { useRouter } from 'next/router'
import Dropzone, { DropzoneState } from 'react-dropzone'

const Partenaire = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [active, setActive] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

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
      type: type,
      active: active,
      image: image,
      description: description,
    }
    addPartenaire(res).then((res) => {
      router.push('/admin/partenaire')
    })
  }

  return (
    <div>
      <h1>Nouveau Partenaire</h1>
      <form onSubmit={sumbitHandler} className="flex flex-col m-4 gap-2">
        <p>Nom</p>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Type (bronze, argent, or, platinium)</p>
        <input
          type="text"
          name="type"
          placeholder="type"
          onChange={(e) => setType(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <p>Actif (true, false)</p>
        <input
          type="text"
          name="active"
          placeholder="active"
          onChange={(e) => setActive(e.target.value)}
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
          Submit
        </button>
      </form>
      <button
        onClick={() => router.push('/admin/partenaire')}
        className="bg-red-500 disabled:bg-red-500/25 text-white font-bold py-2 px-4 rounded w-full"
      >
        Annuler
      </button>
    </div>
  )
}

export default Partenaire

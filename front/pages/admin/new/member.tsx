import React, { useState, useMemo } from 'react'
import { addMember } from '../../../src/api/member'
import { useRouter } from 'next/router'
import Dropzone, { DropzoneState } from 'react-dropzone'

const member = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
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
      role: role,
      description: description,
      image: image,
    }

    addMember(res).then((res) => {
      router.push('/admin/member')
    })
  }

  return (
    <div>
      <h1>Nouveau Membre</h1>
      <form onSubmit={sumbitHandler} className="flex flex-col m-4 gap-2">
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <input
          type="text"
          name="role"
          placeholder="role"
          onChange={(e) => setRole(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <div className="border-2 border-gray-300 rounded-md p-2 w-full">
          {dropzone} {image.length > 0 && <img src={image} alt="" />}
        </div>

        <button
          type="submit"
          disabled={
            name.length === 0 ||
            role.length === 0 ||
            description.length === 0 ||
            image.length === 0
          }
          className="bg-blue-500 text-white rounded-md p-2"
        >
          Submit
        </button>
      </form>
      <button
        onClick={() => router.push('/admin/boat')}
        className="bg-red-500 disabled:bg-red-500/25 text-white font-bold py-2 px-4 rounded w-full"
      >
        Annuler
      </button>
    </div>
  )
}

export default member

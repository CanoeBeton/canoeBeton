import { useRouter } from 'next/router'
import { getMember, modifyMember } from '../../../src/api/member'
import { useQuery } from 'react-query'
import Link from 'next/link'
import { useState } from 'react'
import Dropzone, { DropzoneState } from 'react-dropzone'
import { Member } from '../../../src/domain/Member'

const MemberInfo = () => {
  const router = useRouter()
  const { id } = router.query as { id: string }
  const [image, setImage] = useState<string | null>(null)
  const { data: member, status } = useQuery({ queryFn: () => getMember(id) })

  const handleDrop = (acceptedFiles: File[]) => {
    const reader = new FileReader()
    reader.readAsDataURL(acceptedFiles[0])
    reader.onload = () => {
      setImage(reader.result as string)
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (status === 'success') {
      let res: {} = {
        id: member.id,
        image: (image as string) ? (image as string) : member.image,
      }
      for (const input of e.target.form) {
        if (input.value) {
          res = { ...res, [input.name]: input.value }
        } else {
          res = { ...res, [input.name]: input.placeholder }
        }
      }
      modifyMember(res as Member)
    }
  }

  const divStyle = 'flex flex-col gap-2 justify-between '
  const inputStyle = 'border-2 border-gray-300 rounded-md p-2 w-full'

  return (
    <div>
      {status === 'success' ? (
        <div>
          <form className="mx-5">
            <div className="md:columns-2">
              <div className={divStyle}>
                <label htmlFor="name">Nom</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="name"
                  id="name"
                  placeholder={member.name}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="role">Role</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="role"
                  id="role"
                  placeholder={member.role}
                />
              </div>
              <div className={divStyle}>
                <label htmlFor="description">Description</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="description"
                  id="description"
                  placeholder={member.description}
                />
              </div>
              <div className={divStyle}>
                <Dropzone onDrop={handleDrop}>
                  {({ getRootProps, getInputProps }: DropzoneState) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>
                        Drag and drop a picture here, or click to select a file
                      </p>
                    </div>
                  )}
                </Dropzone>
                <p className={inputStyle}>{image ? 'Success' : 'Pas encore'}</p>
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
                href="/admin/member"
              >
                Retour
              </Link>
            </div>
          </form>
          {image && (
            <div className="m-10">
              <p>Visualisation de l'image:</p>
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

export default MemberInfo

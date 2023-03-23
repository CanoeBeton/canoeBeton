import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Member } from '../../../src/domain/Member'

const MemberInfo = () => {
  const member: Member = {
    id: '1',
    name: 'Jean',
    role: 'admin',
    description: "Jean est un membre de l'association",
    image: 'https://picsum.photos/200/300',
  }

  const [name, setName] = React.useState(member.name)
  const [role, setRole] = React.useState(member.role)
  const [description, setDescription] = React.useState(member.description)
  const [image, setImage] = React.useState(member.image)

  const router = useRouter()
  const { id } = router.query

  const changeNameHandler = (e: any) => {
    //Valider le nom
    //Si le nom est valide, faire un appel à l'API pour modifier le nom
    //Si le nom n'est pas valide, afficher un message d'erreur

    setName(e.target.value)
  }
  const changeRoleHandler = (e: any) => {
    setRole(e.target.value)
  }
  const changeDescriptionHandler = (e: any) => {
    setDescription(e.target.value)
  }
  const changeImageHandler = (e: any) => {
    setImage(e.target.value)
  }

  return (
    <div>
      <Link href="/admin/member">Retour</Link>
      <div>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={changeNameHandler}
        />
        <br />

        <label htmlFor="role">Rôle</label>
        <input
          type="text"
          name="role"
          id="role"
          value={role}
          onChange={changeRoleHandler}
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={changeDescriptionHandler}
        />
        <br />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={changeImageHandler}
        />
        <br />
        <button>Modifier</button>
      </div>
    </div>
  )
}

export default MemberInfo

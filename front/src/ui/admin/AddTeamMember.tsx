import React, {
  useState,
  useEffect,
  FunctionComponent,
  PropsWithChildren,
} from 'react'

interface HeaderProps {}

const AddTeamMember: FunctionComponent<PropsWithChildren<HeaderProps>> = () => {
  const [name, setName] = useState('')
  const [role, setRole] = useState("Membre de l'équipe")
  const [description, setDescription] = useState('')
  const [imagePath, setImagePath] = useState('')

  const handleSubmit = (event: { preventDefault: () => void }) => {
    async function addMember() {
      const res = await fetch('/api/team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          role,
          description,
          imagePath,
        }),
      })
      const data = await res.json()
    }
    addMember()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => {
          setName(event.target.value)
          setImagePath(event.target.value.replace(/ /g, ''))
        }}
      />
      <br />
      <br />
      <label htmlFor="role">Role:</label>
      <input
        type="text"
        id="role"
        value={role}
        onChange={(event) => setRole(event.target.value)}
      />
      <br />
      <br />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        style={{ width: '2000px', height: '200px' }}
      />
      <br />
      <br />
      <label htmlFor="imagePath">Image Path:</label>
      <input
        type="text"
        id="imagePath"
        value={imagePath}
        onChange={(event) => setImagePath(event.target.value)}
      />
      <br />
      <br />
      <button type="submit">Add Member</button>
    </form>
  )
}

export default AddTeamMember

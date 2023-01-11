import React, {
  useState,
  useEffect,
  FunctionComponent,
  PropsWithChildren,
} from 'react'

const AddSponsor: FunctionComponent<PropsWithChildren> = () => {
  const [description, setDescription] = useState('')
  const [categorie, setCategorie] = useState('Béton')
  const [imagePath, setImagePath] = useState('')

  const handleSubmit = (event: { preventDefault: () => void }) => {
    async function addSponsor() {
      const res = await fetch('/api/sponsor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          categorie,
          description,
          imagePath,
        }),
      })
      const data = await res.json()
    }
    addSponsor()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="categorie">Catégorie (Béton ou mosaique):</label>
      <input
        type="text"
        id="categorie"
        value={categorie}
        onChange={(event) => {
          setCategorie(event.target.value)
          setImagePath(event.target.value.replace(/ /g, ""))
        }}
      />
      <br />
      <br />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        style={{ width: "2000px", height: "200px" }}
      />
      <br />
      <br />
      <label htmlFor="imagePath">Nom du fichier de l&apos;image:</label>
      <input
        type="text"
        id="imagePath"
        value={imagePath}
        onChange={(event) => setImagePath(event.target.value)}
      />
      <br />
      <br />
      <button type="submit">Ajouter le partenaire</button>
    </form>
  )
}

export default AddSponsor

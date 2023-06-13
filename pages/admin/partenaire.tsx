import React from 'react'
import AdminPage from '../../src/ui/admin/AdminListView'
import { getPartenaire, deletePartenaires } from '../../src/api/partenaire'
import { useQuery } from 'react-query'

const Partenaire = () => {
  const { data: allPartenaires, status } = useQuery({
    queryFn: () => getPartenaire(false),
  })

  return (
    <div>
      {status === 'success' ? (
        <AdminPage
          what="partenaire"
          allEntities={allPartenaires}
          deleteAllFunc={deletePartenaires}
          keyPropriety="name"
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Partenaire

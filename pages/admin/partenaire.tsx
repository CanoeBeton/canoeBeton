import React from 'react'
import AdminPage from '../../src/ui/admin/AdminPage'
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
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Partenaire

import React from 'react'
import AddTeamMember from '../../src/ui/admin/AddTeamMember'
import AddSponsor from '../../src/ui/admin/AddSponsor'

const dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <p>Utiliser les menus si-bas pour modifier les différentes pages.</p>
      <h2>Équipe</h2>
      <AddTeamMember />
      <h2>Partenaires</h2>
      <AddSponsor />
    </>
  )
}

export default dashboard

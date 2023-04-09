import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './BoatInformation.module.css'
import { Boat } from '../../../../domain/Boat'
import { useQuery } from 'react-query'
import { getYear } from '../../../../api/year'
import { getBoat } from '../../../../api/boat'

interface HeaderProps {
  boatName: string
}

const BoatInformation: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
  boatName,
}) => {
  const { data: boat, status: status } = useQuery({
    queryKey: ['boaty'],
    queryFn: () => getBoat(boatName),
  })

  return (
    <div className={styles.informationContainer}>
      {status == 'error' && (
        <span>Une erreur est survenue, veillez réessayer plus tard</span>
      )}
      {status == 'loading' && <span> Chargement en cours ! </span>}
      {status == 'success' && (
        <>
          <div className={styles.container}>
            <h1>Dimensions, Caractéristique</h1>
            <span> Poids: {boat.poids} </span>
            <span> Longueur: {boat.longueur} </span>
            <span> Largeur: {boat.largeur} </span>
            <span> Profondeur: {boat.profondeur}</span>
            <span> Épaisseur: {boat.epaisseur}</span>
            <div className={styles.couleurContainer}>
              <span> Couleur: </span>
              <div className={styles.couleur}>
                <span>Extérieur: {boat.couleur_exterieure}</span>
                <span>Intérieur: {boat.couleur_interieure}</span>
              </div>
            </div>
            <span>Renforcement: {boat.renforcement}</span>
          </div>

          <div className={styles.container}>
            <h1>Propriétés du Béton</h1>
            <h3>TODO</h3>
          </div>
        </>
      )}
    </div>
  )
}

export default BoatInformation

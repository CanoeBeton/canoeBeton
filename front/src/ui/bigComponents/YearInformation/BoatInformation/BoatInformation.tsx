import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './BoatInformation.module.css'
import { useQuery } from '@tanstack/react-query'
import { getBoat } from '../../../../api/boat'
import { getMelangesByBoat } from '../../../../api/melange'

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
  const { data: melange, status: statusMelange } = useQuery({
    queryKey: ['melange'],
    queryFn: () => getMelangesByBoat(boatName),
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

          {statusMelange == 'success' && (
            <div className={styles.container}>
              <h1>Propriétés du Béton</h1>
              {melange.map((melange) => {
                return (
                  <div>
                    <h2> {melange.title} </h2>
                    <div className={styles.melangeContainer}>
                      <span>
                        Masse volumique sèche : {melange.masse_volumique_seche}
                      </span>
                      <span>
                        Résistance en compression à 28 jours :{' '}
                        {melange.resistance_compression}
                      </span>
                      <span>
                        Résistance en tension à 28 jours :{' '}
                        {melange.resistance_tension}
                      </span>
                      <span>Module de Young : {melange.module_young}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default BoatInformation

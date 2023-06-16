import { FunctionComponent, PropsWithChildren } from 'react'
import { useQuery } from 'react-query'
import { getBoat } from '../../../../api/boat'
import { getMelangesByBoat } from '../../../../api/melange'
import { getYear } from '../../../../api/year'

interface HeaderProps {
  boatName: string
}

const BoatInformation: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
  boatName,
}) => {
  const { data: boat, status: status } = useQuery({
    queryKey: ['boat'],
    queryFn: () => getBoat(boatName),
  })

  const { data: melange, status: statusMelange } = useQuery({
    queryKey: ['melange'],
    queryFn: () => getMelangesByBoat(boatName),
  })

  return (
    <div className=" flex flex-col md:flex-row gap-10 mb-10">
      {status == 'error' && (
        <span>Une erreur est survenue, veillez réessayer plus tard</span>
      )}
      {status == 'loading' && <span> Chargement en cours ! </span>}
      {status == 'success' && (
        <>
          <div className="rounded-lg bg-white p-10 flex-1 border-2 border-black gap-3 flex flex-col">
            <h1 className="section-title">Dimensions, Caractéristique</h1>
            <div> Poids: {boat.poids} </div>
            <div> Longueur: {boat.longueur} </div>
            <div> Largeur: {boat.largeur} </div>
            <div> Profondeur: {boat.profondeur}</div>
            <div> Épaisseur: {boat.epaisseur}</div>
            <div className="">
              <div> Couleur: </div>
              <div className="pl-4">
                <div>Extérieur: {boat.couleur_exterieure}</div>
                <div>Intérieur: {boat.couleur_interieure}</div>
              </div>
            </div>
            <div>Renforcement: {boat.renforcement}</div>
          </div>

          {statusMelange == 'success' && (
            <div className="rounded-lg bg-white p-10 flex-1 border-2 border-black gap-5 flex flex-col">
              <h1 className="section-title">Propriétés du Béton</h1>
              {melange.map((melange) => {
                return (
                  <div
                    key={melange.title}
                    className=" border-b border-black/20 last:border-0"
                  >
                    <h2 className="text-xl font-semibold"> {melange.title} </h2>
                    <div className=" pl-4">
                      <div>
                        Masse volumique sèche : {melange.masse_volumique_seche}
                      </div>
                      <div>
                        Résistance en compression à 28 jours :{' '}
                        {melange.resistance_compression}
                      </div>
                      <div>
                        Résistance en tension à 28 jours :{' '}
                        {melange.resistance_tension}
                      </div>
                      <div>Module de Young : {melange.module_young}</div>
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

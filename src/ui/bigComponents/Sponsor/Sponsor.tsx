import { FunctionComponent, PropsWithChildren } from 'react'

import { useQuery } from 'react-query'
import { getPartenaire } from '../../../api/partenaire'
import SponsorCard from './SponsorCard/SponsorCard'
import { getActiveYear } from '../../../api/year'
const Sponsor: FunctionComponent<PropsWithChildren> = ({}) => {
  const { data: partenaire, status: partenaireStatus } = useQuery({
    queryKey: ['partenaire'],
    queryFn: () => getPartenaire(true),
  })
  const { data: year, status: yearStatus } = useQuery({
    queryKey: ['active year'],
    queryFn: () => getActiveYear(),
  })

  return (
    <div className={'flex flex-col bg-beton px-[5%]'}>
      <div className={'page-title self-center'}>Partenaires</div>
      <h2 className={'section-title'}>Nos partenaire de l&apos;année! </h2>
      {yearStatus == 'error' && (
        <span>Une erreur est survenue, veillez réessayer plustard</span>
      )}
      {yearStatus == 'loading' && <span> Chargement en cours ! </span>}
      {yearStatus == 'success' && 
        <img className={'mx-[10vw]'} src={year.partenaire_mosaique} alt={'Mosaique des partenaires'}/>
      }
      <h2 className={'section-title py-4'}>Nos partenaire </h2>
      {partenaireStatus == 'error' && (
        <span>Une erreur est survenue, veillez réessayer plustard</span>
      )}
      {partenaireStatus == 'loading' && <span> Chargement en cours ! </span>}
      {partenaireStatus == 'success' && (
        <div>
          {partenaire?.map((partenaire, index) => (
            <SponsorCard partenaire={partenaire} pictureLeft={index % 2 == 0} key={partenaire.name}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default Sponsor

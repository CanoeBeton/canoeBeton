import { CSSProperties, FunctionComponent, PropsWithChildren } from "react"
import NextEventList from "../../Event/NextEventList/NextEventList";

interface HeaderProps {
}

const LastYear: FunctionComponent<PropsWithChildren<HeaderProps>> = ({ }) => {
  return (
    <div className={'flex flex-col w-auto py-10 px-[15vw] bg-white bg-opacity-60 gap-20'}>
      <div>
        <h1 className={'font-bold text-5xl pb-8'}> LE BÉTON, ÇA FLOTTE! </h1>
        <video controls>
          <source src="/Accueil/presentation.mp4" type="video/mp4"/>
        </video>
      </div>
      <div>
        <h1 className={'font-bold text-5xl pb-8'}> Ce qui nous attend pour l&apos;édition 2022-2023 </h1>
        <div className={'flex gap-8 flex-col lg:flex-row'}>
          <img alt="Notre équipe" src="/Accueil/nextyear.webp" className={'lg:w-[40vw] object-contain object-center'} />
          <text>La compétition régionale américaine à laquelle l&apos;équipe participe, l&apos;ASCE Student Concrete Canoe Competition,
            est tenue habituellement en avril 2023. Une première place à cette compétition permet à l&apos;équipe de participer à la
            compétition nationale plus tard en juin 2023. La compétition nationale canadienne tenue par la SCGC a lieu en mai 2023.
            Les villes canadiennes et américaines accueillant les compétitions cette année sont encore inconnues.</text>
        </div>
      </div>
      <div>
        <h1 className={'font-bold text-5xl pb-8'}> Ce qui nous attend pour l&apos;édition 2022-2023 </h1>
        <NextEventList/>
      </div>
    </div>
  )
}

export default LastYear;

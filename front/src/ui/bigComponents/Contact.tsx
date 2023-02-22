import React from 'react'
import { FunctionComponent, PropsWithChildren } from 'react'
import styles from 'styles/ui/bigComponents/Contact.module.css'
import SimpleBox from '../containers/SimpleBox'
import ComplexBox from '../containers/ComplexBox'
import Socials from '../smallComponents/Socials'
import Image from 'next/image'

interface ContactProps {}

const Contact: FunctionComponent<PropsWithChildren<ContactProps>> = ({}) => {
  return (
    <>
      <div className={styles.color}></div>
      {/* <Image
        src={'/../public/Contact/groupPicture.webp'}
        alt={'Photo de groupe'}
        width={3000}
        height={1500}
        className={styles.image}
      /> */}
      <div className={styles.titreContainer}>
        <div className={styles.titre}>Nous joindre</div>
      </div>
      <div className={styles.containerBox}>
        <div className={styles.two}>
          <SimpleBox>
            <div className={styles.sousTitre}>Adresse</div>
            <p>
              1065, avenue de la Médecine, local-1945 Pavillon Adrien-Pouliot,
              Université Laval Québec (QC) G1V 0A6
            </p>
            <div className={styles.sousTitre}>Email</div>
            <p>canoe.ulaval@gmail.com</p>
            <div className={styles.sousTitre}>Téléphone</div>
            <p>418-999-5540</p>
          </SimpleBox>
        </div>
        <div className={styles.one}>
          <ComplexBox title="Nos réseaux">
            <Socials />
          </ComplexBox>
          <ComplexBox title="Faire un don">
            Merci de votre intéret! Pour nous encourager, transmettez-nous un
            chèque à l&apos;ordre de l&apos;<b>Université Laval</b>, pour
            <b> Équipe de Canoë de béton</b>.
          </ComplexBox>
        </div>
      </div>
    </>
  )
}

export default Contact

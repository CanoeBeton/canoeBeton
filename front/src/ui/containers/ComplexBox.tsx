import React, { useState } from 'react'
import { FunctionComponent, PropsWithChildren } from 'react'
import styles from 'styles/ui/containers/box.module.css'
import stylesTitle from 'styles/ui/bigComponents/Contact.module.css'

interface ComplexBoxProps {
  title: string
}
const ComplexBox: FunctionComponent<PropsWithChildren<ComplexBoxProps>> = ({
  children,
  title,
}) => {
  const [open, setOpen] = useState(true)
  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <div className={styles.box} onClick={clickHandler}>
      <div className={`${stylesTitle.sousTitre} ${styles.complexSousTitre}`}>
        {title}
      </div>
      {open ? <p>{children}</p> : <></>}
    </div>
  )
}

export default ComplexBox

import React from 'react'
import { FunctionComponent, PropsWithChildren } from 'react'

import styles from 'styles/ui/containers/box.module.css'

interface BoxProps {}
const SimpleBox: FunctionComponent<PropsWithChildren<BoxProps>> = ({
  children,
}) => {
  return <div className={styles.box}>{children}</div>
}

export default SimpleBox

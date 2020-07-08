import React, { ReactNode } from 'react'

import styles from './btn.module.css'

type BtnFace = {
  children: ReactNode;
  action: Function;
  pos?: Boolean;
  iconOnly?: Boolean;
  textOnly?: Boolean;
}

function Btn({
  children,
  action,
  pos,
  iconOnly,
  textOnly
}: BtnFace) {
  return (
    <>
      <button
        className={`
          ${styles.btn} 
          ${pos ? styles.pos : styles.pre}
          ${iconOnly ? styles.icon : ''}
          ${textOnly ? styles.text : ''}
          `}
        onClick={() => action()}>
        {children}
      </button>
    </>
  )
}

export default Btn

import React, { ReactNode } from 'react'

import styles from './btn.module.css'

type BtnFace = {
  children: ReactNode;
  href?: string;
  action?: Function;
  pos?: Boolean;
  iconOnly?: Boolean;
  textOnly?: Boolean;
}

function Btn({
  children,
  href,
  action,
  pos,
  iconOnly,
  textOnly
}: BtnFace) {

  function hrefReplace(href: string) {
    window.location.href = href;
  }

  return (
    <>
      <button
        className={`
          ${styles.btn} 
          ${pos ? styles.pos : styles.pre}
          ${iconOnly ? styles.icon : ''}
          ${textOnly ? styles.text : ''}
          `}
        onClick={() => (href) ? hrefReplace(href) : (action) ? action() : ''}>
        {children}
      </button>
    </>
  )
}

export default Btn

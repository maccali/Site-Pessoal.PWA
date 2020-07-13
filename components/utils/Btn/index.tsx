import React, { ReactNode } from 'react'

import styles from './btn.module.css'

type BtnFace = {
  children: ReactNode;
  href?: string;
  action?: Function;
  pos?: Boolean;
  iconOnly?: Boolean;
  textOnly?: Boolean;
  noStyle?: Boolean
}

function Btn({
  children,
  href,
  action,
  pos,
  iconOnly,
  textOnly,
  noStyle
}: BtnFace) {

  function hrefReplace(href: string) {
    window.location.href = href;
  }

  if (noStyle) {
    if (href) {
      return (
        <a href={href}>
          {children}
        </a>
      )
    } else {
      return (
        <a onClick={() => (action) ? action() : ''}>
          {children}
        </a>
      )

    }
  } else {
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


}

export default Btn

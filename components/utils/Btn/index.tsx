import React, { ReactNode, useRef, useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

import styles from './btn.module.css'

type BtnFace = {
  children: ReactNode;
  href?: string;
  action?: Function;
  load?: Boolean;
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
  noStyle,
  load
}: BtnFace) {

  const ref = useRef(null);
  const [width, setWidth] = useState<Number>(0)
  const [height, setHeight] = useState<Number>(0)

  function hrefReplace(href: string) {
    window.location.href = href;
  }

  useEffect(() => {
    console.log(ref)
    // @ts-ignore: Object is possibly 'null'.
    ref.current ? setWidth(ref.current.offsetWidth) : 0;
    // @ts-ignore: Object is possibly 'null'.
    ref.current ? setHeight(ref.current.offsetHeight) : 0;
  }, [ref.current]);

  if (load) {
    return (
      <>
        <div
          className={styles.load}
          style={{
            width: Number(width),
            height: Number(height)
          }}
        >
          <ClipLoader size={23} color="#00d6b4" />
        </div>
      </>
    )
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
          ref={ref}
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

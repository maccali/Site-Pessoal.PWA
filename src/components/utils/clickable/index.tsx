import React, { ReactNode, useRef, useEffect, useState } from 'react'
import { ClickableStyle, ClickableSpiner, Neutral } from './styles'

import { ClipLoader } from 'react-spinners'

// import styles from './button.module.css'

type ClickableFace = {
  title: string
  children: ReactNode
  href?: string
  action?: () => void
  load?: boolean
  pos?: boolean
  iconOnly?: boolean
  textOnly?: boolean
  noStyle?: boolean
  target?: string
  rel?: string
}

function Clickable({
  title,
  children,
  href,
  action,
  pos,
  iconOnly,
  textOnly,
  noStyle,
  load,
  target,
  rel
}: ClickableFace) {
  const ref = useRef(null)
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  function hrefReplace(href: string) {
    window.location.href = href
  }

  useEffect(() => {
    ref.current ? setWidth(ref.current.offsetWidth) : 0
    ref.current ? setHeight(ref.current.offsetHeight) : 0
  }, [ref.current])

  if (load) {
    return (
      <>
        <ClickableSpiner
          style={{
            width: Number(width),
            height: Number(height)
          }}
        >
          <ClipLoader size={23} color="#00d6b4" />
        </ClickableSpiner>
      </>
    )
  }

  if (noStyle) {
    if (href) {
      return (
        <Neutral>
          <a
            title={title}
            target={target}
            href={href}
            rel={rel ? rel : 'noopener noreferrer'}
          >
            {children}
          </a>
        </Neutral>
      )
    } else {
      return (
        <Neutral>
          <button title={title} onClick={() => (action ? action() : '')}>
            {children}
          </button>
        </Neutral>
      )
    }
  } else {
    if (target) {
      return (
        <ClickableStyle textOnly={textOnly} iconOnly={iconOnly} pos={pos}>
          <a
            title={title}
            ref={ref}
            //     className={`
            // ${styles.btn}
            // ${pos ? styles.pos : styles.pre}
            // ${iconOnly ? styles.icon : ''}
            // ${textOnly ? styles.text : ''}
            // ${className ? styles.className : ''}
            // `}
            target={target}
            href={href}
            rel={rel ? rel : 'noopener noreferrer'}
          >
            {children}
          </a>
        </ClickableStyle>
      )
    } else {
      return (
        <ClickableStyle textOnly={textOnly} iconOnly={iconOnly} pos={pos}>
          <button
            title={title}
            ref={ref}
            // className={`
            // ${styles.btn}
            // ${pos ? styles.pos : styles.pre}
            // ${iconOnly ? styles.icon : ''}
            // ${textOnly ? styles.text : ''}
            // ${className ? styles.className : ''}
            // `}
            onClick={() => (href ? hrefReplace(href) : action ? action() : '')}
          >
            {children}
          </button>
        </ClickableStyle>
      )
    }
  }
}

export default Clickable

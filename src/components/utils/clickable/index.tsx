/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode, useRef, useEffect, useState } from 'react'
import Link from 'next/link'

import { ClickableStyle, ClickableSpiner, Neutral } from './styles'

import { ClipLoader } from 'react-spinners'

type ClickableFace = {
  type: 'link' | 'buttom'
  title: string
  children: ReactNode
  pos?: boolean
  iconOnly?: boolean
  textOnly?: boolean
  noStyle?: boolean
  href?: string
  rel?: string
  target?: string
  external?: boolean
  action?: () => void
  load?: boolean
}

function Clickable({
  children,
  title,
  type,
  action,
  external,
  href,
  iconOnly,
  load,
  noStyle,
  pos,
  rel,
  target,
  textOnly
}: ClickableFace) {
  const ref = useRef(null)
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    ref.current ? setWidth(ref.current.offsetWidth) : 0
    ref.current ? setHeight(ref.current.offsetHeight) : 0
  }, [ref.current])

  if (type === 'link') {
    if (external) {
      if (noStyle) {
        return (
          <a
            href={href ? href : ''}
            title={title}
            target={target ? target : '_blank'}
            rel={rel ? rel : 'noopener noreferrer'}
          >
            {children}
          </a>
        )
      } else {
        return (
          <ClickableStyle textOnly={textOnly} iconOnly={iconOnly} pos={pos}>
            <a
              title={title}
              ref={ref}
              target={target ? target : '_blank'}
              rel={rel ? rel : 'noopener noreferrer'}
              href={href ? href : ''}
            >
              {children}
            </a>
          </ClickableStyle>
        )
      }
    } else {
      if (noStyle) {
        return (
          <Neutral>
            <Link title={title} ref={ref} href={href ? href : ''}>
              {children}
            </Link>
          </Neutral>
        )
      } else {
        return (
          <ClickableStyle textOnly={textOnly} iconOnly={iconOnly} pos={pos}>
            <Link title={title} href={href ? href : ''} ref={ref}>
              {children}
            </Link>
          </ClickableStyle>
        )
      }
    }
  } else {
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
      return (
        <Neutral>
          <button title={title} onClick={() => (action ? action() : '')}>
            {children}
          </button>
        </Neutral>
      )
    } else {
      return (
        <ClickableStyle textOnly={textOnly} iconOnly={iconOnly} pos={pos}>
          <button
            title={title}
            ref={ref}
            onClick={() => (action ? action() : '')}
          >
            {children}
          </button>
        </ClickableStyle>
      )
    }
  }

  return (
    <Neutral>
      <p>Problem</p>
    </Neutral>
  )
}

export default Clickable

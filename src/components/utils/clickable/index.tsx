'use client'

import React, { ReactNode, useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { ClipLoader } from 'react-spinners'

type ClickableProps = {
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
  className?: string
}

function Clickable({
  children,
  title,
  type,
  action,
  external,
  href,
  load,
  noStyle,
  rel,
  target,
  className
}: ClickableProps) {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setWidth((ref.current as any).offsetWidth)
      setHeight((ref.current as any).offsetHeight)
    }
  }, [ref.current])

  const defaultClasses = `
  group
  flex items-center justify-center 
  px-8 py-3 
  text-white text-sm font-bold 
  bg-[#0e2c54] shadow-md 
  transition-all duration-300 
  transform
  
  skew-x-[42deg] 
  rounded-tr-[0px] rounded-bl-[0px] 
  rounded-tl-[45px] rounded-br-[45px] 
  
  hover:bg-[#637fff] 
  hover:skew-x-[-42deg] 
  hover:rounded-tl-[0px] hover:rounded-br-[0px]
  hover:rounded-tr-[45px] hover:rounded-bl-[45px] 
`

  const innerSkewFix = `
  transform 
  skew-x-[-42deg] 
  group-hover:skew-x-[42deg] 
  flex items-center gap-2   
  transition-all duration-200 
  transform
  `

  if (type === 'link') {
    if (external) {
      if (noStyle) {
        return (
          <a
            href={href || ''}
            title={title}
            target={target || '_blank'}
            rel={rel || 'noopener noreferrer'}
            className={className}
          >
            {children}
          </a>
        )
      } else {
        return (
          <a
            title={title}
            ref={ref}
            target={target || '_blank'}
            rel={rel || 'noopener noreferrer'}
            href={href || ''}
            className={`${defaultClasses} ${className || ''}`}
          >
            <span className={innerSkewFix}>{children}</span>
          </a>
        )
      }
    } else {
      if (noStyle) {
        return (
          <Link title={title} ref={ref} href={href || ''} className={className}>
            {children}
          </Link>
        )
      } else {
        return (
          <Link
            title={title}
            href={href || ''}
            ref={ref}
            className={`${defaultClasses} ${className || ''}`}
          >
            <span className={innerSkewFix}>{children}</span>
          </Link>
        )
      }
    }
  } else {
    if (load) {
      return (
        <div
          style={{ width, height }}
          className="flex justify-center items-center"
        >
          <ClipLoader size={23} color="#00d6b4" />
        </div>
      )
    }

    if (noStyle) {
      return (
        <button title={title} onClick={() => action?.()} className={className}>
          {children}
        </button>
      )
    } else {
      return (
        <button
          title={title}
          ref={ref}
          onClick={() => action?.()}
          className={`${defaultClasses} ${className || ''}`}
        >
          <span className={innerSkewFix}>{children}</span>
        </button>
      )
    }
  }
}

export default Clickable

'use client'

import { useEffect } from 'react'
import ReactGA from 'react-ga4'

export function Analytics() {
  useEffect(() => {
    if (window.location.hostname !== 'localhost') {
      ReactGA.initialize('G-JQJKNXGFHG') // Substitua pelo seu ID GA4
      ReactGA.send('pageview')
    }
  }, [])

  return null
}

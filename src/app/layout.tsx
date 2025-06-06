// app/layout.tsx

import './globals.css'
import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Analytics } from './_analytics'
import Nav from '../components/utils/nav'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'Guilherme Maccali - Programador que da Vida a sua Ideia',
    template: '%s | Guilherme Maccali'
  },
  description:
    'Olá, sou programador Fullstack, Entusiasta em tecnologias produtivas, Adoro desafios e fazer belas aplicações tomarem vida através de código limpo',
  metadataBase: new URL('https://guilhermemaccali.com'),
  themeColor: '#0E2C54',
  openGraph: {
    title: 'Guilherme Maccali - Programador que da Vida a sua Ideia',
    description:
      'Olá, sou programador Fullstack, Entusiasta em tecnologias produtivas, Adoro desafios e fazer belas aplicações tomarem vida através de código limpo',
    url: '/',
    siteName: 'Guilherme Maccali',
    images: [
      {
        url: '/imgs/social.png',
        width: 1200,
        height: 630,
        alt: 'Guilherme Maccali Banner'
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme Maccali - Programador que da Vida a sua Ideia',
    description:
      'Olá, sou programador Fullstack, Entusiasta em tecnologias produtivas, Adoro desafios e fazer belas aplicações tomarem vida através de código limpo',
    creator: 'Guilherme Maccali',
    images: ['/imgs/social.png']
  },
  verification: {
    google: 'HAjlWQjWiA57CNVQ7noJE7H2TfpUTivWdUw5iMCeeXc',
    other: {
      'msvalidate.01': '81683EFDA66EF8B29045BBAF04D02DBD'
    }
  },
  viewport: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <Nav />
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  )
}

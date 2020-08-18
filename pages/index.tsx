import React from 'react'

// External Libs
import Head from 'next/head'

// Page Content
import SpacerContent from '../components/content/spacer'
import SocialContent from '../components/content/social'
import AboutContent from '../components/content/about'

function Home() {

  return (
    <>
      <Head>
        <title>🕹 Home</title>
      </Head>
      <main>
        <SpacerContent/>
        <SocialContent />
        <AboutContent />
      </main>
    </>
  )
}

export default Home

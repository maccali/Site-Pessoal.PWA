import React from 'react'

// External Libs
import Head from 'next/head'

// Page Content
import AboutContent from '../components/content/about'

function Home() {

  return (
    <>
      <Head>
        <title>🕹 Home</title>
      </Head>
      <main>
        <AboutContent />
      </main>
    </>
  )
}

export default Home

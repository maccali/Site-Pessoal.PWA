import React from 'react'
import Head from 'next/head'

// import Nav from '../components/utils/nav'
import { GiAcrobatic } from "react-icons/gi";


function Home() {

  return (
    <>
      {/* <Nav /> */}
      <Head>
        <title>POWER PWA</title>
      </Head>
      <main>
        POWER PWA
        <GiAcrobatic />
      </main>
    </>
  )
}

export default Home

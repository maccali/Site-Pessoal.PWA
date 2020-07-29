import React, { useState, useEffect } from 'react'


import api from '../services/api'

import Head from 'next/head'
// import Btn from '../components/utils/Btn'


function Home() {

  const [load, setLoad] = useState<boolean>(false);

  async function getData() {
    api.get('/v1/public/characters')
      .then((response: any) => {
        if (response.status === 200) {
          console.log('certo')
          console.log(response)

        }
        setLoad(false)
      }).catch((error) => {
        // Erro
        console.log('Erro')
        console.log(error)
        console.log(error.response)
        setLoad(false)
      })
  }

  useEffect(() => {
    getData()
  }, []);


  return (
    <>
      <Head>
        <title>🕹 Home</title>
      </Head>
      <main>
        <div className="container-fluid container-full-height">
          <div className="content flex-center">

          </div>
        </div>
      </main>
    </>
  )
}

export default Home

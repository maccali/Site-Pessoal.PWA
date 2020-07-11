import React from 'react'
import Head from 'next/head'
import { RiFilter2Line } from 'react-icons/ri';
import { TiPlus } from 'react-icons/ti';

import HeaderList from '../../components/utils/HeaderList'
import Btn from '../../components/utils/Btn'



function Grupos() {

  return (
    <>
      <Head>
        <title>👨‍👩‍👦‍👦 Grupos</title>
      </Head>
      <main className="mt-4">
        <HeaderList title="Grupos" >
          <Btn action={() => { console.log('😋 Abre filtro') }} iconOnly>
            <RiFilter2Line />
          </Btn>
          <Btn action={() => { console.log('😎 Abre Adicioner') }} iconOnly>
            <TiPlus />
          </Btn>
        </HeaderList>
      </main>
    </>
  )
}

export default Grupos
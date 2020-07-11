import React from 'react'
import Head from 'next/head'
import { RiFilter2Line } from 'react-icons/ri';
import { TiPlus } from 'react-icons/ti';
import { AiOutlineEye, AiOutlineEdit, AiOutlineClose } from 'react-icons/ai';

import HeaderList from '../../components/utils/HeaderList'
import CardList from '../../components/utils/CardList'
import CardListNode from '../../components/utils/CardListNode'
import CardListActions from '../../components/utils/CardListActions'
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
        <CardList title="Grupo">
          <CardListNode col="col-12 col-md-4" field="Qualificação" value="Administradores" />
          <CardListNode col="col-12 col-md-4" field="Função" value="Comandar a parada toda" />
          <CardListNode col="col-12 col-md-4" field="Nome" value="Grupo 1" />
          <CardListNode col="col-12 col-md-4" field="Nome" value="Grupo 1" />
          <CardListNode col="col-12 col-md-4" field="Nome" value="Grupo 1" />
          <CardListActions>
            <Btn action={() => { console.log('😎 Ver Grupo') }} iconOnly>
              <AiOutlineEye />
            </Btn>
            <Btn action={() => { console.log('😎 Editar Grupo') }} iconOnly>
              <AiOutlineEdit />
            </Btn>
            <Btn action={() => { console.log('😎 Excluir grupo') }} iconOnly>
              <AiOutlineClose />
            </Btn>
          </CardListActions>
        </CardList>

        <CardList title="Grupo 2">
        </CardList>

        <CardList title="Grupo 3">
        </CardList>
      </main>
    </>
  )
}

export default Grupos
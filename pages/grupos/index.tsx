import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { RiFilter2Line } from 'react-icons/ri';
import { TiPlus } from 'react-icons/ti';
import { AiOutlineEye, AiOutlineEdit, AiOutlineClose } from 'react-icons/ai';

import HeaderList from '../../components/utils/HeaderList'
import CardList from '../../components/utils/CardList'
import CardListNode from '../../components/utils/CardListNode'
import CardListActions from '../../components/utils/CardListActions'
import Btn from '../../components/utils/Btn'
import BtnIconCard from '../../components/utils/BtnIconCard'


function Grupos() {

  const [grupos, setGrupos] = useState([
    { title: 'Administradores', utility: "Comandar a parada toda" },
    { title: 'Administradores 2', utility: "Comandar a parada toda" },
    { title: 'Administradores 3', utility: "Comandar a parada toda" },
    { title: 'Administradores 4', utility: "Comandar a parada toda" },
  ])

  useEffect(() => {
    console.log('😁 Pegando grupos')
  }, [])

  return (
    <>
      <Head>
        <title>👨‍👩‍👦‍👦 Grupos</title>
      </Head>
      <main className="mt-4 mb-4">
        <HeaderList title="Grupos" >
          <Btn action={() => { console.log('😋 Abre filtro') }} iconOnly>
            <RiFilter2Line />
          </Btn>
          <Btn action={() => { console.log('😎 Abre Adicioner') }} iconOnly>
            <TiPlus />
          </Btn>
        </HeaderList>
        {grupos.map(grupo =>
          <CardList key={`${grupo.title}`} title={`${grupo.title}`}>
            <CardListNode col="col-12 col-md-4" field="Utilidade" value={`${grupo.utility}`} />
            <CardListNode col="col-12 col-md-4" field="Utilidade" value={`${grupo.utility}`} />
            <CardListActions>
              <Btn action={() => { console.log('😎 Ver Grupo') }} iconOnly noStyle>
                <BtnIconCard>
                  <AiOutlineEye />
                </BtnIconCard>
              </Btn>
              <Btn action={() => { console.log('😎 Editar Grupo') }} iconOnly noStyle>
                <BtnIconCard>
                  <AiOutlineEdit />
                </BtnIconCard>
              </Btn>
              <Btn action={() => { console.log('😎 Excluir grupo') }} iconOnly noStyle>
                <BtnIconCard>
                  <AiOutlineClose />
                </BtnIconCard>
              </Btn>
            </CardListActions>
          </CardList>
        )}
      </main>
    </>
  )
}

export default Grupos
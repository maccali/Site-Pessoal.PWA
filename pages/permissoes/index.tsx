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
import Modal from '../../components/utils/Modal'


function Permissoes() {

  const [permissoes] = useState([
    {
      title: 'Categoria', acoes: {
        inserir: true,
        visualisar: true,
        editar: true,
        excluir: true,
      }
    },
    {
      title: 'Post', acoes: {
        inserir: false,
        visualisar: true,
        editar: false,
        desativar: true,
      }
    },
    {
      title: 'Grupos', acoes: {
        inserir: false,
        visualisar: true,
        editar: true,
        excluir: true,
        desativar: true,
      }
    },
  ])

  const [modalEdit, setModalEdit] = useState(false)
  const [modalInsert, setModalInsert] = useState(false)
  const [modalViewer, setModalViewer] = useState(false)
  const [modalFilter, setModalFilter] = useState(false)

  useEffect(() => {
    console.log('😁 Pegando permissoes')
  }, [])

  return (
    <>
      <Head>
        <title>🩲 Permissões</title>
      </Head>
      <main className="mt-4 mb-4">
        <HeaderList title="Permissões" >
          <Btn action={() => { setModalFilter(true) }} iconOnly>
            <RiFilter2Line />
          </Btn>
          <Btn action={() => { setModalInsert(true) }} iconOnly>
            <TiPlus />
          </Btn>
        </HeaderList>
        {permissoes.map(permissao =>
          <CardList key={`${permissao.title}`} title={`${permissao.title}`}>
            {Object.entries(permissao.acoes).map(([key, item]) =>
              < CardListNode
                col="col-12 col-md-3"
                field={`${key}`}
                value={item ? 'Ativo' : 'Inativo' }
                tag={item ? '#98ec65' : '#ff5555' } />
            )}
            <CardListActions>
              <Btn action={() => { setModalViewer(true) }} iconOnly noStyle>
                <BtnIconCard>
                  <AiOutlineEye />
                </BtnIconCard>
              </Btn>
              <Btn action={() => { setModalEdit(true) }} iconOnly noStyle>
                <BtnIconCard>
                  <AiOutlineEdit />
                </BtnIconCard>
              </Btn>
              <Btn action={() => { console.log('😎 Excluir Permissão') }} iconOnly noStyle>
                <BtnIconCard>
                  <AiOutlineClose />
                </BtnIconCard>
              </Btn>
            </CardListActions>
          </CardList>
        )}
      </main>

      <Modal open={modalInsert} setClose={() => setModalInsert(!modalInsert)}  >
        INSERT
      </Modal>
      <Modal open={modalEdit} setClose={() => setModalEdit(!modalEdit)}  >
        EDIT
      </Modal>
      <Modal open={modalViewer} setClose={() => setModalViewer(!modalViewer)}  >
        VIEW
      </Modal>
      <Modal open={modalFilter} setClose={() => setModalFilter(!modalFilter)}  >
        Filter
      </Modal>

    </>
  )
}

export default Permissoes
import React, { useState, useEffect } from 'react'

import ProductCard from '../components/cards/ProductCard'
import ProductContent from '../components/content/ProductContent'
import Modal from '../components/utils/Modal'


import api from '../services/api'

import Head from 'next/head'
import Btn from '../components/utils/Btn'


function Home() {


  const [comics, setComics] = useState([]);
  const [load, setLoad] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);
  const [offset, setOffset] = useState<number>(0);

  const [current, setCurrent] = useState<any>(null);
  const [modal, setModal] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('There was an error when catching days, Verify Internet');

  type ThumbnailFace = {
    path: string,
    extension: string,
  }

  type PricesFace = {
    type: string,
    price: number
  }

  type ComicFace = {
    title: string,
    description?: string,
    thumbnail: ThumbnailFace,
    prices: Array<PricesFace>
  }

  async function getData() {

    setOffset(page * limit)

    api.get(`/v1/public/comics?limit=${limit}&offset=${offset}`)
      .then((response: any) => {
        if (response.status === 200) {
          console.log('certo')
          console.log(response)

          var { results } = response.data.data

          setComics(comics.concat(results))

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


  function bodyControl(flag: boolean) {
    let { body } = document;
    if (flag) {
      body.classList.remove('scroll-off')
    } else {
      body.classList.add('scroll-off')
    }
  }

  function openModal(current: any) {
    bodyControl(false)
    setModal(true)
    setCurrent(current)
    // tslint:disable-next-line
    document.getElementById('scroll').scrollTop = 0

  }

  function closeModal() {
    bodyControl(true)
    setModal(false)
  }


  return (
    <>
      <Head>
        <title>🕹 Home</title>
      </Head>
      <main>
        <div className="container-fluid">
          <div className="container p-0">
            <div className="row">
              {comics.map((comic: ComicFace) =>
                <div className="col-12 col-sm-6 col-md-4">
                  <Btn
                    title={comic.title}
                    action={() => openModal(comic)}
                    noStyle
                  >
                    <ProductCard
                      title={comic.title}
                      imgUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      description={comic.description}
                      price={comic.prices[0].price}
                    />
                  </Btn>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Modal open={modal} setClose={() => closeModal()}>
        {current ?
          <ProductContent product={current} />
          : ''}
      </Modal>
    </>
  )
}

export default Home

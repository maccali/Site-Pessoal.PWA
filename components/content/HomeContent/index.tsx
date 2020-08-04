
import React, { useEffect, useState} from 'react'

// External Libs
import Head from 'next/head'
import NumberFormat from 'react-number-format';

// Intenal Utils
import Modal from '../../../components/utils/Modal'
import Erro from '../../../components/utils/Error'
import Btn from '../../../components/utils/Btn'
import Spinner from '../../../components/utils/Spinner';
import Pagination from '../../../components/utils/Pagination'

// Product Card and Contents
import ProductCard from '../../../components/cards/ProductCard'
import ProductContent from '../../../components/content/ProductContent'

// Api Config
import api from '../../../services/api'

function HomeContent() {


  const [comics, setComics] = useState([]);
  const [load, setLoad] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(9);
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
    setLoad(true)

    api.get(`/v1/public/comics?limit=${limit}&offset=${offset}`)
      .then((response: any) => {
        if (response.status === 200) {

          var { results } = response.data.data

          setComics(comics.concat(results))

        }
        setPage(page + 1)
        setLoad(false)
      }).catch((error) => {

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
    document.getElementById('scroll').scrollTop = 0
  }

  function closeModal() {
    bodyControl(true)
    setModal(false)
  }

  return (
    <>
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
          <div className="row">

            {error ? <Erro message={errorMsg} noImg /> : ''}
            {load ? <Spinner />
              : <Pagination
                action={() => getData()}
              >
                <NumberFormat
                  type="text"
                  value={String(page)}
                  onChange={e => setPage(Number(e.target.value))}
                  decimalSeparator={false}
                />
              </Pagination>}
          </div>
        </div>
      </div>
      <Modal open={modal} setClose={() => closeModal()}>
        {current ?
          <ProductContent product={current} />
          : ''}
      </Modal>
    </>
  )
}

export default HomeContent

import Btn from '../../utils/Btn'

import React, { useEffect } from 'react'

import styles from './ProductContent.module.css'

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

type Capsule = {
  product: ComicFace
}

function ProductContent({
  product
}: Capsule) {

  useEffect(() => {
    console.log(product)
  })
  return (
    <>
      {product ?
        <section>
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <h2 className={styles.title}>
                  {product.title}
                </h2>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className={styles.img}>
                    <img src={`${product.thumbnail.path}.${product.thumbnail.extension}`} alt={`Image for ${product.title}`} />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <p className={styles.price}>
                    {product.prices[0].price === 0 ? 'Free' :
                      `$ ${product.prices[0].price}`
                    }
                  </p>
                  {product.description ?
                    <div className={styles.description}>
                      <p>
                        {product.description}
                      </p>
                    </div>
                    : ''}
                </div>
              </div>
            </div>
          </div>
        </section>
        : ''}
    </>
  )
}

export default ProductContent

import styles from './ProductCard.module.css'


type ProductCardFace = {
  title: string;
  imgUrl: string;
  description?: string;
  price: number;
}

function ProductCard({
  title,
  imgUrl,
  description,
  price,
}: ProductCardFace) {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <div className={styles.img}>
          <img src={imgUrl} alt={title} />
        </div>
        <div className={styles.price}>
          {price == 0 ?
            <p>Free</p>
            : <p>${price}</p>
          }
        </div>
        {/* <div className={styles.description}>
            {description}
          </div> */}
      </div>
    </>
  )
}

export default ProductCard
import React from 'react'

import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'

import styles from './CartCard.module.css'
import Btn from '../../utils/Btn'


type CartCardFace = {
  title: string;
  imgUrl: string;
  description?: string;
  price: number;
  total: number;
  quantity: number;
}

function CartCard({
  title,
  imgUrl,
  price,
  total,
  quantity
}: CartCardFace) {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={imgUrl} alt={title} />
        </div>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <div className={styles.quantity}>
          <p>Quantity</p>
          <span>{quantity} Unit</span>
        </div>
        <div className={styles.price}>
          <p>Price</p>
          {price == 0 ?
            <span>Free</span>
            : <span>$ {price}</span>
          }
        </div>
        <div className={styles.total}>
          <p>Total</p>
          {total == 0 ?
            <span>Free</span>
            : <span>$ {total}</span>
          }
        </div>
        <div className={styles.ajusts}>
          <Btn
            title={`Remove One ${title}`}
            action={() => { }}
            noStyle
          >
            <FiMinus />
          </Btn>
          
          <Btn
            title={`Add One ${title}`}
            action={() => { }}
            noStyle
          >
            <FiPlus />
          </Btn>

          <Btn
            title={`Remove All ${title}`}
            action={() => { }}
            noStyle
          >
            <FiTrash2 />
          </Btn>
        </div>
      </div>
    </>
  )
}

export default CartCard

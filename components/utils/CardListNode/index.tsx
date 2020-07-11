import React from 'react'

import styles from './CardListNode.module.css'

type CardListNodeFace = {
  col: string;
  field: string;
  value: string;
}

function CardListNode({
  col,
  field,
  value
}: CardListNodeFace) {

  return (
    <>
      <div className={`${col}`}>
        <div className={styles.node}>
          <b>{field}</b>
          <span>{value}</span>
        </div>
      </div>
    </>
  )

}

export default CardListNode

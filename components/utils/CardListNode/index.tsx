import React from 'react'

import styles from './CardListNode.module.css'

type CardListNodeFace = {
  col: string;
  field: string;
  value: string;
  tag?: string;
}

function CardListNode({
  col,
  field,
  value,
  tag
}: CardListNodeFace) {

  return (
    <>
      <div className={`${col}`}>
        <div className={styles.node}>
          <b>{field}</b>
          <div className={styles.inliner}>
            {tag ?
              <span
                className={styles.tag}
                style={{
                  backgroundColor: tag,
                }}></span> : ''}
            {value}
          </div>
        </div>
      </div>
    </>
  )

}

export default CardListNode

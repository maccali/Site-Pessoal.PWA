import React from 'react'

import styles from './CardListNode.module.css'
import { spawn } from 'child_process'

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
                }}></span> : 'k'}
            {value}
          </div>
        </div>
      </div>
    </>
  )

}

export default CardListNode

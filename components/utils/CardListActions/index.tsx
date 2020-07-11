import React, { ReactNode } from 'react'

import styles from './CardListActions.module.css'

type CardListActionsFace = {
  children: ReactNode;
}

function CardListActions({
  children,
}: CardListActionsFace) {

  return (
    <>
      <div className="col-12">
        <div className={styles.node}>
          {children}
        </div>
      </div>
    </>
  )

}

export default CardListActions

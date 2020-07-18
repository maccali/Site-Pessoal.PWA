import React, { ReactNode } from 'react'


import styles from './CardList.module.css'

type CardListFace = {
  title: string;
  children: ReactNode;
}

function CardList({
  title,
  children,
}: CardListFace) {

  return (
    <>
      <div className="container-fluid mt-4">
        <div className={`container ${styles.cont}`}>
          <h4 className="mb-3">{title}</h4>
          <div className="row">
            {children}
          </div>
        </div>
      </div>
    </>
  )

}

export default CardList

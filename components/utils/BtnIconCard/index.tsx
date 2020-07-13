import React, { ReactNode } from 'react'

import styles from './BtnIconCard.module.css'

type BtnIconCardFace = {
  children: ReactNode;
}

function BtnIconCard({
  children,
}: BtnIconCardFace) {

  return (
    <>
      <div className={styles.btn}>
        {children}
      </div>
    </>
  )

}

export default BtnIconCard

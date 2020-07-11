import React, { ReactNode } from 'react'

import styles from './HeaderList.module.css'

type HeaderListFace = {
  title: string;
  children: ReactNode;
}

function HeaderList({
  title,
  children,
}: HeaderListFace) {

  return (
    <>
      <div className="container-fluid">
        <div className={`container ${styles.cont}`}>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className={`${styles.node} ${styles.left}`}>
                <h3>
                  {title}
                </h3>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className={`${styles.node} ${styles.right}`}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default HeaderList

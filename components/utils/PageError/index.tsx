import React, { ReactNode } from 'react'

import Head from 'next/head'

import styles from './PageError.module.css'

type ErrorFace = {
  statusCode: Number,
  title: string,
  message: string,
  children: ReactNode,
}

function Error({
  statusCode,
  message,
  title,
  children
}: ErrorFace) {
  return (
    <>
      <Head>
        <title>❌ {title}</title>
      </Head>
      <main>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.card}>
                  <div className={styles.text}>
                    <h1 className="mt-5">{statusCode}</h1>
                    <h2 className="mt-3">{message}</h2>
                    <div className="mt-5">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Error

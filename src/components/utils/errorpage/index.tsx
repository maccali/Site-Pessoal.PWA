import React, { ReactNode } from 'react'

import type { Metadata } from 'next'

import styles from './errorpage.module.css'

type ErrorPageFace = {
  statusCode: number
  title: string
  message: string
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Maccali, Guilherme'
}

function ErrorPage({ statusCode, message, title, children }: ErrorPageFace) {
  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className={styles.card}>
              <figure className={styles.figure}>
                <img src="https://picsum.photos/1400/1400/?blur=1" alt="" />
              </figure>
              <div className={styles.conttext}>
                <div className={styles.text}>
                  <h1>{statusCode}</h1>
                  <h2>{message}</h2>
                  <div>{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ErrorPage

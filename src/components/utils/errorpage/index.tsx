import React, { ReactNode } from 'react';

import Head from 'next/head';

import styles from './errorpage.module.css';

type ErrorPageFace = {
  statusCode: number;
  title: string;
  message: string;
  children: ReactNode;
};

function ErrorPage({ statusCode, message, title, children }: ErrorPageFace) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
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
  );
}

export default ErrorPage;

import Head from 'next/head'

import styles from './pageerror.module.css'

function Error({ statusCode, message, title, children }) {
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
                    <h1>{statusCode}</h1>
                    <h2>{message}</h2>
                    {children}
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

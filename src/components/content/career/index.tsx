import React from 'react'
import Fade from 'react-reveal/Fade'

import Clickable from '../../utils/clickable'

import styles from './career.module.css'

function CareerContent() {
  return (
    <>
      <section id="career">
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="col-xs">
              <Fade bottom>
                <div className={styles.title}>
                  <h2>Trajetória & Carreira</h2>
                </div>
              </Fade>
            </div>
            <div className="col-xs">
              <Fade bottom>
                <div className={styles.text}>
                  <p>
                    Você pode conferir mais sobre mim e minha carreira
                    <br />
                    clicando no botão abaixo para ver o meu currículo.
                  </p>
                </div>
              </Fade>
            </div>

            <div className="col-xs">
              <Fade bottom>
                <div className={styles.btn}>
                  <Clickable
                    type="link"
                    title="Ver meu currículo"
                    href="https://drive.google.com/file/d/1460pRWSez9wvyzEB2_p8oxvB8o86MLUj/view?usp=drive_link"
                    external
                    textOnly
                  >
                    <span>Ver meu currículo</span>
                  </Clickable>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareerContent

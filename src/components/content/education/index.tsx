import React from 'react'
// import Fade from 'react-reveal/Fade'

import Clickable from '../../utils/clickable'

import styles from './education.module.css'

function EducationContent() {
  return (
    <>
      <section id="education">
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="col-xs">
              {/* <Fade bottom> */}
              <div className={styles.title}>
                <h2>Conteúdo Educacional</h2>
              </div>
              {/* </Fade> */}
            </div>
            <div className="col-xs">
              {/* <Fade bottom> */}
              <div className={styles.text}>
                <p>
                  Em minha jornada acadêmica e profissional desenvolvi
                  <br />
                  alguns workshops e tbm o meu Trabalho de conclusão de curso.
                  <br />
                  Você pode conferi-los nos links abaixo
                </p>
              </div>
              {/* </Fade> */}
            </div>

            <div className="col-xs">
              {/* <Fade bottom> */}
              <div className={styles.btnContent}>
                <div className={styles.btn}>
                  <Clickable
                    type="link"
                    title="TCC"
                    href="https://www.univates.br/bdu/items/85c06239-1e2f-41de-8c8d-dba80b4cc521"
                    external
                    textOnly
                  >
                    <span>TCC</span>
                  </Clickable>
                </div>

                <div className={styles.btn}>
                  <Clickable
                    type="link"
                    title="Workshops na Luby"
                    href="https://www.youtube.com/@LubySoftware/search?query=guilherme%20maccali"
                    external
                    textOnly
                  >
                    <span>Workshops na Luby</span>
                  </Clickable>
                </div>
              </div>
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EducationContent

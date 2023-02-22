import React from 'react'
import Fade from 'react-reveal/Fade'
import Image from 'next/image'

import Clickable from '../../utils/clickable'

import styles from './about.module.css'

function AboutContent() {
  function setAnchor(anchor: string) {
    document.getElementById(`${anchor}`).scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <>
      <section id="about">
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="col-xs">
              <Fade right>
                <div className={styles.title}>
                  <h2>Sobre</h2>
                </div>
              </Fade>
            </div>
            <div className="col-xs col-md-4">
              <Fade left>
                <div className={styles.imgcontainer}>
                  <Image
                    src="/imgs/eu.jpg"
                    alt="Minha Foto"
                    fill
                  />
                </div>
              </Fade>
            </div>
            <div className="col-xs col-md-8">
              <Fade right>
                <div className={styles.abouttext}>
                  <p className={styles.greetings}>
                    <b>Seja Bem-Vindo!</b>
                    Meu nome é,
                  </p>
                  <h3 className={styles.name}>Guilherme Maccali</h3>
                  <div className={styles.content}>
                    <p>
                      Fiz com muito carinho para que por aqui você veja mais
                      sobre mim e minha carreira. Sinta-se em casa.
                    </p>
                    <p>
                      Sou programador Fullstack a aproximadamente 3 anos, desde
                      os 15 anos sou muito ligado a tecnologia tendo desde cedo
                      o contato com ela. Sou entusiasta em novas tecnologias de
                      alto desempenho, escalabilidade e produtividade. Adoro
                      desafios e fazer belas aplicações tomarem vida através de
                      código limpo.
                    </p>
                    <p>
                      Sou formado em Engenharia de Software na
                      <Clickable
                        type="link"
                        title="UNIVATES"
                        href="https://www.univates.br"
                        external
                        noStyle
                      >
                        <span> Universidade do vale do Taquari, UNIVATES.</span>
                      </Clickable>
                    </p>
                  </div>
                  <Clickable
                    type="buttom"
                    title="Entre em contato"
                    action={() => setAnchor('contact')}
                    textOnly
                  >
                    <span>Entre em contato</span>
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

export default AboutContent

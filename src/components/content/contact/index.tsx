import React from 'react'
import Fade from 'react-reveal/Fade'

import Clickable from '../../utils/clickable'

import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebook,
  FaGithub,
  FaGitlab,
  FaWhatsapp,
  FaEnvelope,
  FaSkype
} from 'react-icons/fa'

import styles from './contact.module.css'

function ContactContent() {
  return (
    <>
      <section id="contact">
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="col-xs">
              <Fade bottom>
                <div className={styles.title}>
                  <h2>Contato</h2>
                </div>
              </Fade>
            </div>
          </div>
          <div className="container">
            <div className="col-xs col-md-6">
              <Fade bottom>
                <h3>
                  <b>Me siga ou converse comigo nas redes sociais: </b>
                </h3>
              </Fade>
              <Fade bottom>
                <div className={`${styles.item} ${styles.instagram}`}>
                  <Clickable
                    type="link"
                    title="Instagram"
                    href="https://www.instagram.com/guilherme_maccali"
                    external
                    noStyle
                  >
                    <FaInstagramSquare />
                    <p>guilherme_maccali</p>
                  </Clickable>
                </div>
              </Fade>
              <Fade bottom>
                <div className={`${styles.item} ${styles.linkedin}`}>
                  <Clickable
                    type="link"
                    title="LinkedIn"
                    href="https://www.linkedin.com/in/guilhermemaccali/"
                    external
                    noStyle
                  >
                    <FaLinkedin />
                    <p>guilhermemaccali</p>
                  </Clickable>
                </div>
              </Fade>
              <Fade bottom>
                <div className={`${styles.item} ${styles.facebook}`}>
                  <Clickable
                    type="link"
                    title="Facebook"
                    href="https://www.facebook.com/guimaccali"
                    external
                    noStyle
                  >
                    <FaFacebook />
                    <p>guimaccali</p>
                  </Clickable>
                </div>
              </Fade>
              <Fade bottom>
                <h3>
                  <b>Veja um pouco de código: </b>
                </h3>
              </Fade>
              <Fade bottom>
                <div className={`${styles.item} ${styles.github}`}>
                  <Clickable
                    type="link"
                    title="GitHub"
                    href="https://github.com/maccali"
                    external
                    noStyle
                  >
                    <FaGithub />
                    <p>maccali</p>
                  </Clickable>
                </div>
              </Fade>
              <Fade bottom>
                <div className={`${styles.item} ${styles.gitlab}`}>
                  <Clickable
                    type="link"
                    title="GitLab"
                    href="https://gitlab.com/maccali"
                    external
                    noStyle
                  >
                    <FaGitlab />
                    <p>maccali</p>
                  </Clickable>
                </div>
              </Fade>
            </div>
            <div className="col-xs col-md-6">
              <Fade bottom>
                <h3>
                  <b>Mandar mensagens para mim no Whatsapp: </b>
                </h3>
              </Fade>
              <Fade bottom>
                <div className={`${styles.item} ${styles.whatsapp}`}>
                  <Clickable
                    type="link"
                    title="Whats App"
                    href="https://api.whatsapp.com/send?phone=5551994700045&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20de%20seu%20site%2C%20pode%20me%20ajudar%3F"
                    external
                    noStyle
                  >
                    <FaWhatsapp />
                    <p>+55 (51) 99470-0045</p>
                  </Clickable>
                </div>
              </Fade>
              <Fade bottom>
                <h3>
                  <b>Ou mandar um email direto clicando no botão: </b>
                </h3>
              </Fade>
              <Fade bottom>
                <div className={`${styles.item} ${styles.mail}`}>
                  <Clickable
                    type="link"
                    title="Meu Email"
                    href="mailto:guimaccali@gmail.com"
                    external
                    noStyle
                  >
                    <FaEnvelope />
                    <p>guimaccali@gmail.com</p>
                  </Clickable>
                </div>
              </Fade>
            </div>
            <div className="col-xs col-md-6">
              <Fade bottom>
                <h3>
                  <b>Conversar comigo no skype: </b>
                </h3>
              </Fade>
              <Fade bottom>
                <div className={`${styles.item} ${styles.skype}`}>
                  <Clickable
                    type="link"
                    title="Skype"
                    href="skype:guimaccali?chat"
                    external
                    noStyle
                  >
                    <FaSkype />
                    <p>guimaccali</p>
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

export default ContactContent

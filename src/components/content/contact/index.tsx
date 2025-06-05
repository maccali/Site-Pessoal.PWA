import React from 'react'

import Clickable from '../../utils/clickable'

import {
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaWhatsapp,
  FaEnvelope,
  FaSkype,
  FaTiktok
} from 'react-icons/fa'

import { PiMicrosoftTeamsLogoFill } from 'react-icons/pi'

import styles from './contact.module.css'

function ContactContent() {
  return (
    <>
      <section id="contact">
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="col-xs">
              <div className={styles.title}>
                <h2>Contato</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="col-xs col-md-6">
              <h3>
                <b>Me siga ou converse comigo nas redes sociais: </b>
              </h3>
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
              <div className={`${styles.item} ${styles.tiktok}`}>
                <Clickable
                  type="link"
                  title="TikTok"
                  href="https://www.tiktok.com/@guilhermemaccali"
                  external
                  noStyle
                >
                  <FaTiktok />
                  <p>@guilhermemaccali</p>
                </Clickable>
              </div>
              <h3>
                <b>Veja um pouco de código: </b>
              </h3>
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
            </div>
            <div className="col-xs col-md-6">
              <h3>
                <b>Mandar mensagens para mim no Whatsapp: </b>
              </h3>
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
              <h3>
                <b>Ou mandar um email direto clicando no botão: </b>
              </h3>
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
            </div>
            <div className="col-xs col-md-6">
              <h3>
                <b>Conversar comigo no Teams: </b>
              </h3>
              <div className={`${styles.item} ${styles.teams}`}>
                <Clickable
                  type="link"
                  title="Microsoft Teams"
                  href="https://teams.microsoft.com/l/chat/0/0?users=guimaccali@gmail.com"
                  external
                  noStyle
                >
                  <PiMicrosoftTeamsLogoFill />
                  <p>guimaccali@gmail.com</p>
                </Clickable>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactContent

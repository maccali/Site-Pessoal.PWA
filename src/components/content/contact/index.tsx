import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from '../../utils/button';

import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebook,
  FaGithub,
  FaGitlab,
  FaWhatsapp,
  FaEnvelope,
  FaSkype,
} from 'react-icons/fa';

import styles from './contact.module.css';

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
                  <Button
                    title="Instagram"
                    href="https://www.instagram.com/guilherme_maccali"
                    target="_black"
                    noStyle
                  >
                    <FaInstagramSquare />
                    <p>guilherme_maccali</p>
                  </Button>
                </div>
              </Fade>
              <Fade bottom>
                <div className={`${styles.item} ${styles.linkedin}`}>
                  <Button
                    title="LinkedIn"
                    href="https://www.linkedin.com/in/guilhermemaccali/"
                    target="_black"
                    noStyle
                  >
                    <FaLinkedin />
                    <p>guilhermemaccali</p>
                  </Button>
                </div>
              </Fade>
              <Fade bottom>
                <div className={`${styles.item} ${styles.facebook}`}>
                  <Button
                    title="Facebook"
                    href="https://www.facebook.com/guimaccali"
                    target="_black"
                    noStyle
                  >
                    <FaFacebook />
                    <p>guimaccali</p>
                  </Button>
                </div>
              </Fade>
              <Fade bottom>
                <h3>
                  <b>Veja um pouco de código: </b>
                </h3>
              </Fade>
              <Fade bottom>
                <div className={`${styles.item} ${styles.github}`}>
                  <Button
                    title="GitHub"
                    href="https://github.com/maccali"
                    target="_black"
                    noStyle
                  >
                    <FaGithub />
                    <p>maccali</p>
                  </Button>
                </div>
              </Fade>
              <Fade bottom>
                <div className={`${styles.item} ${styles.gitlab}`}>
                  <Button
                    title="GitLab"
                    href="https://gitlab.com/maccali"
                    target="_black"
                    noStyle
                  >
                    <FaGitlab />
                    <p>maccali</p>
                  </Button>
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
                  <Button
                    title="Whats App"
                    href="https://api.whatsapp.com/send?phone=5551994700045&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20de%20seu%20site%2C%20pode%20me%20ajudar%3F"
                    target="_black"
                    noStyle
                  >
                    <FaWhatsapp />
                    <p>+55 (51) 99470-0045</p>
                  </Button>
                </div>
              </Fade>
              <Fade bottom>
                <h3>
                  <b>Ou mandar um email direto clicando no botão: </b>
                </h3>
              </Fade>
              <Fade bottom>
                <div className={`${styles.item} ${styles.mail}`}>
                  <Button
                    title="Meu Email"
                    href="mailto:guimaccali@gmail.com"
                    target="_black"
                    noStyle
                  >
                    <FaEnvelope />
                    <p>guimaccali@gmail.com</p>
                  </Button>
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
                  <Button
                    title="Skype"
                    href="skype:guimaccali?chat"
                    target="_black"
                    noStyle
                  >
                    <FaSkype />
                    <p>guimaccali</p>
                  </Button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactContent;

import React from 'react'
import Fade from 'react-reveal/Fade'

import Clickable from '../../utils/clickable'

import {
  FaLinkedin,
  FaFacebook,
  FaInstagramSquare,
  FaGithub,
  FaSkype,
  FaGitlab
} from 'react-icons/fa'

import styles from './social.module.css'

function SocialContent() {
  return (
    <>
      <section>
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="col-xs">
              <Fade left>
                <div className={styles.social}>
                  <Clickable
                    title="LinkedIn"
                    href="https://www.linkedin.com/in/guilhermemaccali/"
                    target="_blank"
                    noStyle
                  >
                    <div className={styles.linkedin}>
                      <FaLinkedin />
                    </div>
                  </Clickable>
                  <Clickable
                    title="Facebook"
                    href="https://www.facebook.com/guimaccali"
                    target="_blank"
                    noStyle
                  >
                    <div className={styles.facebook}>
                      <FaFacebook />
                    </div>
                  </Clickable>
                  <Clickable
                    title="Instagram"
                    href="https://www.instagram.com/guilherme_maccali"
                    target="_blank"
                    noStyle
                  >
                    <div className={styles.instagram}>
                      <FaInstagramSquare />
                    </div>
                  </Clickable>
                  <Clickable
                    title="Skype"
                    href="skype:guimaccali?chat"
                    target="_blank"
                    noStyle
                  >
                    <div className={styles.skype}>
                      <FaSkype />
                    </div>
                  </Clickable>
                  <Clickable
                    title="GitHub"
                    href="https://github.com/maccali"
                    target="_blank"
                    noStyle
                  >
                    <div className={styles.github}>
                      <FaGithub />
                    </div>
                  </Clickable>
                  <Clickable
                    title="GitLab"
                    href="https://gitlab.com/maccali"
                    target="_blank"
                    noStyle
                  >
                    <div className={styles.gitlab}>
                      <FaGitlab />
                    </div>
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

export default SocialContent

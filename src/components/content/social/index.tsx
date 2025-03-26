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
                    type="link"
                    title="LinkedIn"
                    href="https://www.linkedin.com/in/guilhermemaccali/"
                    external
                    noStyle
                  >
                    <div className={styles.linkedin}>
                      <FaLinkedin />
                    </div>
                  </Clickable>
                  <Clickable
                    type="link"
                    title="Facebook"
                    href="https://www.facebook.com/guimaccali"
                    external
                    noStyle
                  >
                    <div className={styles.facebook}>
                      <FaFacebook />
                    </div>
                  </Clickable>
                  <Clickable
                    type="link"
                    title="Instagram"
                    href="https://www.instagram.com/guilherme.maccali"
                    external
                    noStyle
                  >
                    <div className={styles.instagram}>
                      <FaInstagramSquare />
                    </div>
                  </Clickable>
                  <Clickable
                    type="link"
                    title="Skype"
                    href="skype:guimaccali?chat"
                    external
                    noStyle
                  >
                    <div className={styles.skype}>
                      <FaSkype />
                    </div>
                  </Clickable>
                  <Clickable
                    type="link"
                    title="GitHub"
                    href="https://github.com/maccali"
                    external
                    noStyle
                  >
                    <div className={styles.github}>
                      <FaGithub />
                    </div>
                  </Clickable>
                  <Clickable
                    type="link"
                    title="GitLab"
                    href="https://gitlab.com/maccali"
                    external
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

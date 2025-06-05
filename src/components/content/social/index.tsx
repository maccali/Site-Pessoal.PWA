import React from 'react'

import Clickable from '../../utils/clickable'

import { FaLinkedin, FaGithub, FaTiktok } from 'react-icons/fa'
import { PiMicrosoftTeamsLogoFill } from 'react-icons/pi'

import styles from './social.module.css'

function SocialContent() {
  return (
    <>
      <section>
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="col-xs">
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
                  title="Microsoft Teams"
                  href="https://teams.microsoft.com/l/chat/0/0?users=guimaccali@outlook.com"
                  external
                  noStyle
                >
                  <div className={styles.teams}>
                    <PiMicrosoftTeamsLogoFill />
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
                  title="TikTok"
                  href="https://www.tiktok.com/@guilhermemaccali"
                  external
                  noStyle
                >
                  <div className={styles.tiktok}>
                    <FaTiktok />
                  </div>
                </Clickable>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SocialContent

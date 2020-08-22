import React from 'react';

import Button from '../../utils/button';

import {
  FaLinkedin,
  FaFacebook,
  FaInstagramSquare,
  FaGithub,
  FaSkype,
  FaGitlab,
} from 'react-icons/fa';

import styles from './social.module.css';

function SocialContent() {
  return (
    <>
      <section>
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="col-xs">
              <div className={styles.social}>
                <Button
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/guilhermemaccali/"
                  target="_blank"
                  noStyle
                >
                  <div className={styles.linkedin}>
                    <FaLinkedin />
                  </div>
                </Button>
                <Button
                  title="Facebook"
                  href="https://www.facebook.com/guimaccali"
                  target="_blank"
                  noStyle
                >
                  <div className={styles.facebook}>
                    <FaFacebook />
                  </div>
                </Button>
                <Button
                  title="Instagram"
                  href="https://www.instagram.com/guilherme_maccali"
                  target="_blank"
                  noStyle
                >
                  <div className={styles.instagram}>
                    <FaInstagramSquare />
                  </div>
                </Button>
                <Button
                  title="Skype"
                  href="skype:guimaccali?chat"
                  target="_blank"
                  noStyle
                >
                  <div className={styles.discord}>
                    <FaSkype />
                  </div>
                </Button>
                <Button
                  title="GitHub"
                  href="https://github.com/maccali"
                  target="_blank"
                  noStyle
                >
                  <div className={styles.github}>
                    <FaGithub />
                  </div>
                </Button>
                <Button
                  title="GitLab"
                  href="https://gitlab.com/maccali"
                  target="_blank"
                  noStyle
                >
                  <div className={styles.gitlab}>
                    <FaGitlab />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SocialContent;

import React from 'react';

import { GiTechnoHeart, GiCoffeeCup } from 'react-icons/gi';
import { FaGithub } from 'react-icons/fa';

import Button from '../../utils/button';

import styles from './footer.module.css';

function FooterContent() {
  return (
    <>
      <footer className={`container-fluid ${styles.cont}`}>
        <div className="container">
          <div className="col-xs col-md-6">
            <div className={`${styles.dedication} ${styles.left}`}>
              Com todo o meu
              <span className={`${styles.icon} ${styles.heart}`}>
                <Button title="Amor" noStyle>
                  <GiTechnoHeart />
                </Button>
              </span>
              e
              <span className={`${styles.icon} ${styles.coffee}`}>
                <Button title="Café" noStyle>
                  <GiCoffeeCup />
                </Button>
              </span>
              .
            </div>
          </div>
          <div className="col-xs col-md-6">
            <div className={`${styles.dedication} ${styles.right}`}>
              Siga para o repositório
              <span className={`${styles.icon} ${styles.git}`}>
                <Button title="Open Source" noStyle>
                  <FaGithub />
                </Button>
              </span>
              .
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterContent;

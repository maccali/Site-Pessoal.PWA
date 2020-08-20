import React from 'react';

import Button from '../../utils/button';

import styles from './career.module.css';

function CareerContent() {
  return (
    <>
      <section>
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="col-xs">
              <div className={styles.title}>
                <h2>Trajetória & Carreira</h2>
              </div>
            </div>
            <div className="col-xs">
              <div className={styles.text}>
                <p>
                  Você pode conferir mais sobre mim e minha carreira clicando no
                  botão abaixo para ver o meu currículo.
                </p>
              </div>
            </div>

            <div className="col-xs">
              <div className={styles.btn}>
                <Button
                  title="Ver meu currículo"
                  href="https://drive.google.com/open?id=1B5wbEIiO2dle-ppZHGW4u1Vni0MTkKzi"
                  target="_blank"
                  textOnly
                >
                  <span>Ver meu currículo</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerContent;

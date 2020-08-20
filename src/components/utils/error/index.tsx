import React from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import styles from './error.module.css';

type ErrorFace = {
  message: string;
  reload?: () => void;
  noImg?: boolean;
};

function Error({ message, reload, noImg }: ErrorFace) {
  return (
    <>
      <div className="container-fluid">
        <div className="container ped-lr">
          <div className="row">
            <div className="col-12">
              <div className={styles.card}>
                <h2 className={styles.title}>{message}</h2>
                {noImg ? '' : <img src="/imgs/Logo.png" alt="Imagem de Erro" />}
                {reload ? (
                  <div className="btn-custom">
                    <button onClick={() => reload}>
                      <AiOutlineReload className={styles.btnicon} />
                      <span>Reload</span>
                    </button>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;

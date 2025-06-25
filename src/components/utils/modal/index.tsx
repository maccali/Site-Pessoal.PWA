'use client'

import React, { ReactNode, useEffect } from 'react'

import { AiOutlineClose } from 'react-icons/ai'

import Clickable from '../clickable'

import styles from './modal.module.css'

type ModalFace = {
  open: boolean
  setClose: (flag: boolean) => void
  children: ReactNode
}

function Modal({ open, setClose, children }: ModalFace) {
  function bodyControl(flag: boolean) {
    const { body } = document
    if (flag) {
      body.classList.remove('scroll-off')
    } else {
      body.classList.add('scroll-off')
    }
  }

  function openModal() {
    bodyControl(false)
    document.getElementById('scroll').scrollTop = 0
  }

  function closeModal() {
    bodyControl(true)
  }

  useEffect(() => {
    if (open) {
      openModal()
    } else {
      closeModal()
    }
  }, [open])

  return (
    <>
      <div
        id="scroll"
        className={
          open
            ? `${styles.contaside} ${styles.contasideativado}`
            : styles.contaside
        }
      >
        <div className={styles.contasidefix}>
          <div className={`container-fluid ${styles.fixedcont}`}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className={styles.headercont}>
                    <div className={styles.img}>
                      <img src="/icons/icon126t.png" alt="Site Logo" />
                    </div>
                    <Clickable
                      type="buttom"
                      title="Fechar menu"
                      action={() => setClose(!open)}
                      iconOnly
                    >
                      <AiOutlineClose />
                    </Clickable>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 ${styles.mt60}`}>
            <div className="mt-5 mb-5">
              <div className={styles.bgprimary}>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal

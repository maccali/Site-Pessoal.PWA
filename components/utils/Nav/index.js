import React, { useState, useEffect } from 'react'
import { AiOutlineMore, AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion"
import Link from 'next/link'
import Btn from '../Btn'


import Router from 'next/router'
import styles from './nav.module.css'

function Nav() {

  const [menuActive, setMenuActive] = useState(false);
  const [menuBack, setMenuBack] = useState(false);
  const [installBtn, setInstallBtn] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState();
  const [links, setLinks] = useState([
    { icone: <TiGroupOutline />, nome: 'Grupos', url: '/grupos' },
    { icone: <AiOutlineUser />, nome: 'Usuários', url: '/usuarios' },
    { icone: <AiOutlineLock />, nome: 'Permissões', url: '/permissoes' },
    // { nome: 'Dashboard', url: '/dashboard' },
    // { nome: 'Icons', url: '/icons' },
    // { nome: 'Notifications', url: '/notifications' },
    // { nome: 'Table List', url: '/tablelist' },
    // { nome: 'Typografy', url: '/typografy' },
    // { nome: 'User Profile', url: '/userprofile' }
  ]);

  function setMenuOpenWithWithSize() {
    setMenuActive((window.innerWidth >= 1740))
  }

  useEffect(() => {
    window.addEventListener("resize", function () {
      setMenuOpenWithWithSize()
    })
    setMenuOpenWithWithSize()
  }, [])

  useEffect(() => {
    (function () {
      (history.length > 1) ? setMenuBack(true) : setMenuBack(false)

      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later.
        setDeferredPrompt(e);
        // Update UI notify the user they can install the PWA
        // showInstallPromotion();
        setInstallBtn(true)
      });
    })()
  });

  function install() {
    setInstallBtn(false)
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        setInstallBtn(false)
      } else {
        setInstallBtn(true)
      }
    });
  }

  console.log(links)

  return (<>
    <div className="container-fluid" className={styles.cont}>
      <div className="container" >
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {/* {menuBack ?
              <li>
                <a onClick={() => Router.back()} className={styles.seta} aria-label="Back Page"><i className="fas fa-arrow-left"></i></a>
              </li>
              : ''} */}
            <li>
              <div className={styles.img}>
                <Link href="/">
                  <a className={styles.seta} aria-label="App Home">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }}
                    >
                      <img src="/icons/icon126t.png" alt="Site Logo" />
                    </motion.div>
                  </a>
                </Link>
              </div>
            </li>
          </ul>
          <ul className={styles.menu}>
            <ul className={styles.menu}>
              <li>
                <a onClick={() => setMenuActive(!menuActive)} className={styles.seta} aria-label="Open Menu"><AiOutlineMore /></a>
              </li>
            </ul>
          </ul>
        </nav>
        <div className={(menuActive) ? `${styles.contaside} ${styles.contasideativado}` : styles.contaside}>
          <div className={styles.contasidefix}>
            <div className={styles.headercont}>
              <p>Menu</p>
              <a onClick={() => setMenuActive(!menuActive)} aria-label="Close Menu">
                <MdClose />
              </a>
            </div>
            <div className={styles.cardmenu}>
              <div>
                <img src="/icons/icon126t.png" alt="Foto do Perfil" />
              </div>
              <span>Apod Pictu</span>
            </div>
            <div className={styles.menulist}>
              {Object.keys(links).map((key) => (
                <Btn href={`${links[key].url}`} noStyle>
                  <div className={styles.menuitem} aria-label="Calendar Button">
                    <span>
                      {links[key].icone}
                    </span>
                    <p>{links[key].nome}</p>
                  </div>
                </Btn>
              ))}

              {installBtn ?
                <a onClick={() => install()} className={styles.menuitem}><span><i class="far fa-arrow-alt-circle-down"></i></span><p>Install App</p></a>
                : ''}

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.space}>
    </div>
  </>
  )
}

export default Nav
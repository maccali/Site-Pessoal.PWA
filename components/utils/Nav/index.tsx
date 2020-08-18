import React, { useState, useEffect } from 'react'

// Icons import 
import { FiMenu } from "react-icons/fi";
import { GiSwordman, GiUpgrade, GiFlamingo } from "react-icons/gi";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoIosApps } from "react-icons/io";
import { MdClose } from "react-icons/md";

// Common Project libs
import Button from '../button'

// Style Module
import styles from './nav.module.css'

function Nav() {

  const [menuActive, setMenuActive] = useState(false);
  const [links, setLinks] = useState([
    { icone: <AiFillInfoCircle />, nome: 'Sobre', url: '#sobre' },
    { icone: <GiSwordman />, nome: 'Interesses', url: '#interesses' },
    { icone: <GiUpgrade />, nome: 'Carreira', url: '#carreira' },
    { icone: <GiFlamingo />, nome: 'Contato', url: '#contato' },
    { icone: <IoIosApps />, nome: 'Projetos', url: '/projetos' },
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

  return (<>
    <div className={`container-fluid ${styles.cont}`}>
      <div className="container" >
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li>
              <div className={styles.img}>
                <Button
                  title="Home"
                  href="/dashboard"
                  noStyle
                >
                  <div className={styles.seta}>
                    <img src="/imgs/logo.png" alt="Site Logo" />
                  </div>
                </Button>
              </div>
            </li>
          </ul>
          <ul className={styles.menu}>
            <Button
              title="Projetos"
              href="/projetos"
              noStyle
            >
              <IoIosApps />
            </Button>
            <Button
              title="Abrir Menu"
              action={() => setMenuActive(!menuActive)}
              noStyle
            >
              <FiMenu />
            </Button>
          </ul>
        </nav>
        <div className={(menuActive) ? `${styles.contaside} ${styles.contasideativado}` : styles.contaside}>
          <div className={styles.contasidefix}>
            <div className={styles.headercont}>
              <p>Menu</p>
              <Button
                title="Fechar Menu"
                action={() => setMenuActive(!menuActive)}
                noStyle
              >
                <MdClose />
              </Button>
            </div>
            <div className={styles.cardmenu}>
              <div>
                <img src="/imgs/eu.jpg" />
              </div>
              <span>Guilherme Maccali</span>
            </div>
            <div className={styles.menulist}>
              {Object.keys(links).map((key) => (
                <Button
                  title={links[key].nome}
                  href={`${links[key].url}`}
                  noStyle
                >
                  <div className={styles.menuitem} aria-label="Calendar Button">
                    <span>
                      {links[key].icone}
                    </span>
                    <p>{links[key].nome}</p>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Nav
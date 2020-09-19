import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Fade from 'react-reveal/Fade'

// Icons import
import { FiMenu } from 'react-icons/fi'
import { GiSwordman, GiUpgrade, GiFlamingo } from 'react-icons/gi'
import { AiFillInfoCircle } from 'react-icons/ai'
import { IoIosApps } from 'react-icons/io'
import { MdClose } from 'react-icons/md'

// Common Project libs
import Clickable from '../clickable'

// Style Module
import styles from './nav.module.css'

function Nav() {
  const [menuActive, setMenuActive] = useState<boolean>(false)
  const [headerActive, setHeaderActive] = useState<boolean>(false)

  const router = useRouter()

  const [links] = useState([
    {
      icone: <AiFillInfoCircle />,
      nome: 'Sobre',
      url: '/',
      anchor: 'about'
    },
    {
      icone: <GiSwordman />,
      nome: 'Interesses',
      url: '/',
      anchor: 'interests'
    },
    {
      icone: <GiUpgrade />,
      nome: 'Carreira',
      url: '/',
      anchor: 'career'
    },
    {
      icone: <GiFlamingo />,
      nome: 'Contato',
      url: '/',
      anchor: 'contact'
    },
    {
      icone: <IoIosApps />,
      nome: 'Projetos',
      url: '/projetos'
    }
  ])

  function setMenuOpenWithWithSize() {
    setMenuActive(window.innerWidth >= 1800)
    setHeaderActive(window.innerWidth <= 1800)
  }

  useEffect(() => {
    window.addEventListener('resize', function () {
      setMenuOpenWithWithSize()
    })
    setMenuOpenWithWithSize()
  }, [])

  function setAnchor(anchor: string) {
    document.getElementById(`${anchor}`).scrollIntoView({
      behavior: 'smooth'
    })
    setMenuOpenWithWithSize()
  }

  return (
    <>
      <div className={`container-fluid ${styles.cont}`}>
        <div className="container">
          <nav className={styles.nav}>
            <ul className={styles.menu}>
              <li>
                <Fade left>
                  <div className={styles.img}>
                    <Clickable title="Home" href="/" noStyle>
                      <div className={styles.seta}>
                        <img src="/imgs/logo.png" alt="Site Logo" />
                      </div>
                    </Clickable>
                  </div>
                </Fade>
              </li>
            </ul>
            <Fade right>
              <ul className={styles.menu}>
                <Clickable title="Projetos" href="/projetos" noStyle>
                  <IoIosApps />
                  <p>Projetos</p>
                </Clickable>
                <Clickable
                  title="Abrir Menu"
                  action={() => setMenuActive(!menuActive)}
                  noStyle
                >
                  <FiMenu />
                  <p>Menu</p>
                </Clickable>
              </ul>
            </Fade>
          </nav>
          <div
            className={
              menuActive
                ? `${styles.contaside} ${styles.contasideativado}`
                : styles.contaside
            }
          >
            <div className={styles.contasidefix}>
              {headerActive ? (
                <div className={styles.headercont}>
                  <p>Menu</p>
                  <Clickable
                    title="Fechar Menu"
                    action={() => setMenuActive(!menuActive)}
                    noStyle
                  >
                    <MdClose />
                  </Clickable>
                </div>
              ) : (
                ''
              )}
              <div className={styles.cardmenu}>
                <div>
                  <img src="/icons/icon126.png" alt="Logo do site" />
                </div>
                <span>Guilherme Maccali</span>
              </div>
              <div className={styles.menulist}>
                {Object.keys(links).map((key: any) =>
                  router.pathname === links[key].url ? (
                    <Clickable
                      key={key}
                      title={links[key].nome}
                      action={() => setAnchor(`${links[key].anchor}`)}
                      noStyle
                    >
                      <div
                        className={styles.menuitem}
                        aria-label="Calendar Button"
                      >
                        <span>{links[key].icone}</span>
                        <p>{links[key].nome}</p>
                      </div>
                    </Clickable>
                  ) : (
                    <Clickable
                      key={key}
                      title={links[key].nome}
                      href={`${links[key].url}${
                        links[key].anchor ? `#${links[key].anchor}` : ''
                      }`}
                      noStyle
                    >
                      <div
                        className={styles.menuitem}
                        aria-label="Calendar Button"
                      >
                        <span>{links[key].icone}</span>
                        <p>{links[key].nome}</p>
                      </div>
                    </Clickable>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav

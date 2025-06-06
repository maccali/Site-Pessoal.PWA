'use client'

import React, { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

// Icons import
import { FiMenu } from 'react-icons/fi'
import { GiSwordman, GiUpgrade, GiFlamingo, GiBrain } from 'react-icons/gi'
import { AiFillInfoCircle } from 'react-icons/ai'
import { IoIosApps } from 'react-icons/io'
import { MdClose } from 'react-icons/md'

import Clickable from '../clickable'

function Nav() {
  const [menuActive, setMenuActive] = useState(false)
  const [headerActive, setHeaderActive] = useState(false)

  const pathname = usePathname()

  const links = [
    {
      icone: <AiFillInfoCircle size={25} />,
      nome: 'Sobre',
      url: '/',
      anchor: 'about'
    },
    {
      icone: <GiSwordman size={25} />,
      nome: 'Interesses',
      url: '/',
      anchor: 'interests'
    },
    {
      icone: <GiUpgrade size={25} />,
      nome: 'Carreira',
      url: '/',
      anchor: 'career'
    },
    {
      icone: <GiBrain size={25} />,
      nome: 'Educacional',
      url: '/',
      anchor: 'education'
    },
    {
      icone: <GiFlamingo size={25} />,
      nome: 'Contato',
      url: '/',
      anchor: 'contact'
    },
    { icone: <IoIosApps size={25} />, nome: 'Projetos', url: '/projetos' }
  ]

  useEffect(() => {
    const handleResize = () => {
      setMenuActive(window.innerWidth >= 1800)
      setHeaderActive(window.innerWidth <= 1800)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const setAnchor = (anchor: string) => {
    const el = document.getElementById(anchor)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuActive(window.innerWidth >= 1800)
  }

  return (
    <aside className="fixed z-50 w-full bg-[#0e2c54]">
      <div className="container mx-auto ">
        <nav className="flex justify-between items-center h-[65px] px-2.5">
          <ul className="flex items-center h-full m-0 p-0">
            <li className="h-full">
              <div className="inline-flex items-center h-full px-4 ">
                <Clickable type="link" title="Home" href="/" noStyle>
                  <div className="h-[55px]">
                    <img
                      src="/imgs/logo.png"
                      alt="Site Logo"
                      className="h-full"
                    />
                  </div>
                </Clickable>
              </div>
            </li>
          </ul>
          <ul className="flex items-center h-full m-0 p-0 ">
            <Clickable
              type="link"
              title="Projetos"
              href="/projetos"
              noStyle
              className="hover:bg-[#637fff] hover:scale-110 transition h-full flex items-center"
            >
              <div className="flex items-center px-4 h-full text-white ">
                <IoIosApps className="w-[25px] h-[25px]" />
                <p className="pl-2 hidden md:block font-montserrat">Projetos</p>
              </div>
            </Clickable>
            <Clickable
              type="buttom"
              title="Abrir Menu"
              action={() => setMenuActive(!menuActive)}
              noStyle
              className="hover:bg-[#637fff] hover:scale-110 transition h-full flex items-center"
            >
              <div className="flex items-center px-4 h-full text-white ">
                <FiMenu className="w-[25px] h-[25px]" />
                <p className="pl-2 hidden md:block font-montserrat">Menu</p>
              </div>
            </Clickable>
          </ul>
        </nav>
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-[#0e2c54] text-white overflow-hidden transition-all duration-200 ${
          menuActive ? 'w-[300px] border-l border-[#637fff]' : 'w-0'
        }`}
      >
        <div className="flex flex-col w-[300px]">
          {headerActive && (
            <div className="flex justify-between items-center h-[60px] px-4">
              <p className="text-lg font-medium font-montserrat">Menu</p>
              <Clickable
                type="buttom"
                title="Fechar Menu"
                action={() => setMenuActive(false)}
                noStyle
              >
                <button className="flex items-center justify-center w-[45px] h-[45px] bg-[#0e2c54] rounded-full hover:bg-[#637fff] hover:scale-110 transition">
                  <MdClose className="text-white w-[26px] h-[26px]" />
                </button>
              </Clickable>
            </div>
          )}

          <div className="flex flex-col items-center my-5">
            <img
              src="/icons/icon126.png"
              alt="Logo do site"
              className="h-[100px] object-cover my-4"
            />
            <span className="font-bold font-montserrat text-xl">
              Guilherme Maccali
            </span>
          </div>

          <div className="flex flex-col">
            {links.map((link, index) => {
              const isCurrent = pathname === link.url && link.anchor
              return isCurrent ? (
                <Clickable
                  key={index}
                  type="buttom"
                  title={link.nome}
                  action={() => setAnchor(link.anchor!)}
                  noStyle
                >
                  <div className="group flex items-center px-8 py-3 hover:bg-[#637fff] transition duration-400 cursor-pointer">
                    <span className="group-hover:scale-150 w-[50px] flex justify-start transition">
                      {link.icone}
                    </span>
                    <p className="m-0 text-xm font-montserrat">{link.nome}</p>
                  </div>
                </Clickable>
              ) : (
                <Clickable
                  key={index}
                  type="link"
                  title={link.nome}
                  href={`${link.url}${link.anchor ? `#${link.anchor}` : ''}`}
                  noStyle
                >
                  <div className="group flex items-center px-8 py-3 hover:bg-[#637fff] duration-400 transition cursor-pointer">
                    <span className="group-hover:scale-150 w-[50px] flex justify-start transition">
                      {link.icone}
                    </span>
                    <p className="m-0 text-xm font-montserrat">{link.nome}</p>
                  </div>
                </Clickable>
              )
            })}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Nav

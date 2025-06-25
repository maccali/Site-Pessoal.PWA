import React from 'react'
import { GiTechnoHeart, GiCoffeeCup } from 'react-icons/gi'
import { FaGithub } from 'react-icons/fa'

import Clickable from '../../utils/clickable'

function FooterContent() {
  const iconBase =
    'transition-transform duration-200 text-[aliceblue] h-[20px] w-[20px] mx-[9px]'
  const iconHover = 'group-hover:scale-[1.7]'
  const textHoverHeart = 'group-hover:text-[#e31b23]'
  const textHoverCoffee = 'group-hover:text-[#ab7f60]'

  return (
    <footer className="bg-[#0e2c54] py-4 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-[aliceblue] text-sm">
          {/* Esquerda */}
          <div className="flex items-center my-2">
            Com todo o meu
            <span className="group inline-flex items-center">
              <Clickable type="link" title="Amor" noStyle>
                <GiTechnoHeart
                  className={`${iconBase} ${iconHover} ${textHoverHeart}`}
                />
              </Clickable>
            </span>
            e
            <span className="group inline-flex items-center">
              <Clickable type="link" title="Café" noStyle>
                <GiCoffeeCup
                  className={`${iconBase} ${iconHover} ${textHoverCoffee}`}
                />
              </Clickable>
            </span>
            .
          </div>

          {/* Direita */}
          <div className="flex items-center my-2">
            Siga para o repositório
            <span className="group inline-flex items-center">
              <Clickable
                type="link"
                title="Open Source"
                href="https://github.com/maccali/Site-Pessoal"
                external
                noStyle
              >
                <FaGithub className={`${iconBase} ${iconHover}`} />
              </Clickable>
            </span>
            .
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterContent

'use client'

import React from 'react'
import Image from 'next/image'
import Clickable from '../../utils/clickable'

function AboutContent() {
  function setAnchor(anchor: string) {
    document.getElementById(`${anchor}`)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <section id="about" className="bg-[#ededed] py-10 md:py-20 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-col md:items-start">
          {/* Título */}
          <div className="w-full text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-light mb-4">Sobre</h2>
          </div>

          <div className="flex flex-row">
            {/* Imagem */}
            <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
              <div className="relative w-[300px] h-[400px]">
                <Image
                  src="/imgs/eu2025.jpg"
                  alt="Minha Foto"
                  fill
                  className="rounded-3xl border border-gray-400 object-cover"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="w-full md:w-2/3 px-4">
              <div className="mb-9">
                <p className="text-base mb-4">
                  <b className="text-xl mr-2">Seja Bem-Vindo!</b>
                  Meu nome é,
                </p>
                <h3 className="text-2xl font-light mb-4">Guilherme Maccali</h3>
                <div className="mb-8 space-y-4">
                  <p className="text-base text-justify indent-6 leading-relaxed">
                    <span className="text-xl font-bold uppercase">F</span>iz com
                    muito carinho para que por aqui você veja mais sobre mim e
                    minha carreira. Sinta-se em casa.
                  </p>
                  <p className="text-base text-justify indent-6 leading-relaxed">
                    <span className="text-xl font-bold uppercase">S</span>ou
                    programador Fullstack a aproximadamente 6 anos, desde os 15
                    anos sou muito ligado a tecnologia tendo desde cedo o
                    contato com ela. Sou entusiasta em novas tecnologias de alto
                    desempenho, escalabilidade e produtividade. Adoro desafios e
                    fazer belas aplicações tomarem vida através de código limpo.
                  </p>
                  <p className="text-base text-justify indent-6 leading-relaxed">
                    <span className="text-xl font-bold uppercase">S</span>ou
                    formado em Engenharia de Software na{' '}
                    <Clickable
                      type="link"
                      title="UNIVATES"
                      href="https://www.univates.br"
                      external
                      noStyle
                    >
                      <span className="text-blue-900 hover:text-blue-700 font-bold">
                        Universidade do Vale do Taquari, UNIVATES.
                      </span>
                    </Clickable>
                  </p>
                </div>
                <Clickable
                  type="buttom"
                  title="Entre em contato"
                  action={() => setAnchor('contact')}
                  textOnly
                >
                  Entre em contato
                </Clickable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent

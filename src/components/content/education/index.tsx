import React from 'react'
import Clickable from '../../utils/clickable'

function EducationContent() {
  return (
    <section
      id="education"
      className="bg-[#f3f3f3] py-10 md:py-20 font-montserrat"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            Conteúdo Educacional
          </h2>
        </div>
        <div className="mt-8 mb-16">
          <p className="text-center text-base leading-relaxed">
            <span className="text-lg font-bold">E</span>
            m minha jornada acadêmica e profissional desenvolvi
            <br />
            alguns workshops e também o meu Trabalho de Conclusão de Curso.
            <br />
            Você pode conferi-los nos links abaixo
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          <div className="flex justify-center mx-2">
            <Clickable
              type="link"
              title="TCC"
              href="https://www.univates.br/bdu/items/85c06239-1e2f-41de-8c8d-dba80b4cc521"
              external
              textOnly
            >
              TCC
            </Clickable>
          </div>
          <div className="flex justify-center mx-2">
            <Clickable
              type="link"
              title="Workshops na Luby"
              href="https://www.youtube.com/@LubySoftware/search?query=guilherme%20maccali"
              external
              textOnly
            >
              Workshops na Luby
            </Clickable>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationContent

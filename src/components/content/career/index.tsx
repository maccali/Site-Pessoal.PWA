import React from 'react'
import Clickable from '../../utils/clickable'

function CareerContent() {
  return (
    <section
      id="career"
      className="bg-[#ededed] py-10 md:py-20 font-montserrat"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            Trajetória & Carreira
          </h2>
        </div>

        <div className="mt-8 mb-16">
          <p className="text-center text-base leading-relaxed">
            <span className="text-lg font-bold">V</span>
            ocê pode conferir mais sobre mim e minha carreira
            <br />
            clicando no botão abaixo para ver o meu currículo.
          </p>
        </div>

        <div className="flex justify-center">
          <Clickable
            type="link"
            title="Ver meu currículo"
            href="https://drive.google.com/file/d/1460pRWSez9wvyzEB2_p8oxvB8o86MLUj/view?usp=drive_link"
            external
            textOnly
          >
            Ver meu currículo
          </Clickable>
        </div>
      </div>
    </section>
  )
}

export default CareerContent

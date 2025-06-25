import React from 'react'
import Clickable from '../../utils/clickable'

import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaTiktok
} from 'react-icons/fa'

import { PiMicrosoftTeamsLogoFill } from 'react-icons/pi'

function ContactContent() {
  const iconClass = 'h-[25px] w-[25px] transition-transform duration-200'
  const textClass =
    'text-black text-sm ml-3 m-0 transition-all duration-200 group-hover:ml-5 group-hover:font-bold'

  return (
    <section
      id="contact"
      className="bg-[#ededed] py-10 md:py-20 font-montserrat"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-light mb-4">Contato</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-bold mb-4">
              Me siga ou converse comigo nas redes sociais:
            </h3>
            <div className="flex flex-col">
              <div className="group inline-flex items-center mb-4 transition-all">
                <Clickable
                  type="link"
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/guilhermemaccali/"
                  external
                  noStyle
                  className="flex"
                >
                  <FaLinkedin
                    className={`${iconClass} text-linkedin group-hover:rotate-[25deg] group-hover:scale-125`}
                  />
                  <p className={textClass}>guilhermemaccali</p>
                </Clickable>
              </div>
              <div className="group inline-flex items-center mb-4 transition-all">
                <Clickable
                  type="link"
                  title="TikTok"
                  href="https://www.tiktok.com/@guilhermemaccali"
                  external
                  noStyle
                  className="flex"
                >
                  <FaTiktok
                    className={`${iconClass} text-tiktok group-hover:rotate-[25deg] group-hover:scale-125`}
                  />
                  <p className={textClass}>@guilhermemaccali</p>
                </Clickable>
              </div>
            </div>
            <h3 className="font-bold mt-6 mb-4">Veja um pouco de código:</h3>
            <div className="group inline-flex items-center mb-4 transition-all">
              <Clickable
                type="link"
                title="GitHub"
                href="https://github.com/maccali"
                external
                noStyle
                className="flex"
              >
                <FaGithub
                  className={`${iconClass} text-github group-hover:rotate-[25deg] group-hover:scale-125`}
                />
                <p className={textClass}>maccali</p>
              </Clickable>
            </div>
          </div>
          <div>
            <h3 className="font-montserrat font-bold mb-4">
              Mandar mensagens para mim no WhatsApp:
            </h3>
            <div className="group inline-flex items-center mb-4 transition-all">
              <Clickable
                type="link"
                title="WhatsApp"
                href="https://api.whatsapp.com/send?phone=5551994700045&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20de%20seu%20site%2C%20pode%20me%20ajudar%3F"
                external
                noStyle
                className="flex"
              >
                <FaWhatsapp
                  className={`${iconClass} text-whatsapp group-hover:rotate-[25deg] group-hover:scale-125`}
                />
                <p className={textClass}>+55 (51) 99470-0045</p>
              </Clickable>
            </div>
            <h3 className="font-bold mt-6 mb-4">
              Ou mandar um email direto clicando no botão:
            </h3>
            <div className="group inline-flex items-center mb-4 transition-all">
              <Clickable
                type="link"
                title="Email"
                href="mailto:guimaccali@gmail.com"
                external
                noStyle
                className="flex"
              >
                <FaEnvelope
                  className={`${iconClass} text-mail group-hover:rotate-[25deg] group-hover:scale-125`}
                />
                <p className={textClass}>guimaccali@gmail.com</p>
              </Clickable>
            </div>
            <h3 className="font-bold mt-6 mb-4">Conversar comigo no Teams:</h3>
            <div className="group inline-flex items-center mb-4 transition-all">
              <Clickable
                type="link"
                title="Microsoft Teams"
                href="https://teams.microsoft.com/l/chat/0/0?users=guimaccali@gmail.com"
                external
                noStyle
                className="flex"
              >
                <PiMicrosoftTeamsLogoFill
                  className={`${iconClass} text-teams group-hover:rotate-[25deg] group-hover:scale-125`}
                />
                <p className={textClass}>guimaccali@gmail.com</p>
              </Clickable>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactContent

import React from 'react'
import Clickable from '../../utils/clickable'

import { FaLinkedin, FaGithub, FaTiktok } from 'react-icons/fa'
import { PiMicrosoftTeamsLogoFill } from 'react-icons/pi'

function SocialContent() {
  return (
    <section className="bg-[#e0e0e0]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-[45px] gap-4">
          <Clickable
            type="link"
            title="LinkedIn"
            href="https://www.linkedin.com/in/guilhermemaccali/"
            external
            noStyle
          >
            <FaLinkedin className="text-[#0a1f3b] w-[23px] h-[23px] transition-transform duration-200 hover:scale-125 hover:text-[#0A66C2]" />
          </Clickable>
          <Clickable
            type="link"
            title="Microsoft Teams"
            href="https://teams.microsoft.com/l/chat/0/0?users=guimaccali@outlook.com"
            external
            noStyle
          >
            <PiMicrosoftTeamsLogoFill className="text-[#0a1f3b] w-[23px] h-[23px] transition-transform duration-200 hover:scale-125 hover:text-[#464EB8]" />
          </Clickable>
          <Clickable
            type="link"
            title="GitHub"
            href="https://github.com/maccali"
            external
            noStyle
          >
            <FaGithub className="text-[#0a1f3b] w-[23px] h-[23px] transition-transform duration-200 hover:scale-125 hover:text-[#6e5494]" />
          </Clickable>
          <Clickable
            type="link"
            title="TikTok"
            href="https://www.tiktok.com/@guilhermemaccali"
            external
            noStyle
          >
            <FaTiktok className="text-[#0a1f3b] w-[23px] h-[23px] transition-transform duration-200 hover:scale-125 hover:text-black" />
          </Clickable>
        </div>
      </div>
    </section>
  )
}

export default SocialContent

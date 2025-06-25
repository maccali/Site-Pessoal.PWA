import Image from 'next/image'
import Clickable from '../../utils/clickable'
import { FaGithub, FaGooglePlay, FaGlobeAmericas } from 'react-icons/fa'

type ProjectFace = {
  title: string
  imgUrl: string
  repoLink?: string
  siteLink?: string
  googlePlayLink?: string
}

function Project({
  title,
  imgUrl,
  repoLink,
  siteLink,
  googlePlayLink
}: ProjectFace) {
  return (
    <article className="mb-8">
      <div
        className="
          flex flex-col items-center bg-[#f3f3f3]
          shadow-md hover:scale-[1.04] transition-transform duration-200
          pt-5 pb-5 rounded-[70px] mt-20 mb-10
        "
      >
        <figure
          className="
            w-[190px] h-[190px] mt-[-80px]
            transition-transform duration-200 hover:scale-[1.07]
          "
        >
          <Image
            src={imgUrl}
            alt={`Logo do projeto ${title}`}
            width={192}
            height={192}
            quality={100}
            className="rounded-[40px] shadow-md"
          />
        </figure>

        <div className="mt-4 mb-4">
          <h3 className="text-center text-lg font-semibold font-montserrat">{title}</h3>
        </div>

        <div className="flex gap-3">
          {repoLink && (
            <Clickable
              type="link"
              title={`Repositório do projeto ${title}`}
              href={repoLink}
              external
              noStyle
            >
              <FaGithub className="w-5 h-5 text-[#33469c] hover:text-[#637fff] hover:scale-110 transition-transform duration-200" />
            </Clickable>
          )}
          {siteLink && (
            <Clickable
              type="link"
              title={`Web App do ${title}`}
              href={siteLink}
              external
              noStyle
            >
              <FaGlobeAmericas className="w-5 h-5 text-[#33469c] hover:text-[#637fff] hover:scale-110 transition-transform duration-200" />
            </Clickable>
          )}
          {googlePlayLink && (
            <Clickable
              type="link"
              title={`Link para Google Play do ${title}`}
              href={googlePlayLink}
              external
              noStyle
            >
              <FaGooglePlay className="w-5 h-5 text-[#33469c] hover:text-[#637fff] hover:scale-110 transition-transform duration-200" />
            </Clickable>
          )}
        </div>
      </div>
    </article>
  )
}

export default Project

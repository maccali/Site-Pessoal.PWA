import Image from 'next/image'
import styles from './project.module.css'

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
    <>
      <article className={styles.cont}>
        <div className={styles.subcont}>
          <figure className={styles.divimg}>
            <Image
              src={imgUrl}
              alt={`Logo do projeto ${title}`}
              width={192}
              height={192}
              quality={100}
            />
          </figure>
          <div className={styles.title}>
            <h3>{title}</h3>
          </div>
          <div className={styles.links}>
            {repoLink ? (
              <Clickable
                type="link"
                title={`Repositório do projeto ${title}`}
                href={repoLink}
                external
                noStyle
              >
                <FaGithub />
              </Clickable>
            ) : (
              ''
            )}
            {siteLink ? (
              <Clickable
                type="link"
                title={`Web App do ${title}`}
                href={siteLink}
                external
                noStyle
              >
                <FaGlobeAmericas />
              </Clickable>
            ) : (
              ''
            )}
            {googlePlayLink ? (
              <Clickable
                type="link"
                title={`Link para google play do ${title}`}
                href={googlePlayLink}
                external
                noStyle
              >
                <FaGooglePlay />
              </Clickable>
            ) : (
              ''
            )}
          </div>
        </div>
      </article>
    </>
  )
}

export default Project

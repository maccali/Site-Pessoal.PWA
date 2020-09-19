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
            <img src={imgUrl} alt={`Logo do projeto ${title}`} />
          </figure>
          <div className={styles.title}>
            <h3>{title}</h3>
          </div>
          <div className={styles.links}>
            {repoLink ? (
              <Clickable
                title={`Repositório do projeto ${title}`}
                href={repoLink}
                target="_blanck"
                noStyle
              >
                <FaGithub />
              </Clickable>
            ) : (
              ''
            )}
            {siteLink ? (
              <Clickable
                title={`Web App do ${title}`}
                href={siteLink}
                target="_blanck"
                noStyle
              >
                <FaGlobeAmericas />
              </Clickable>
            ) : (
              ''
            )}
            {googlePlayLink ? (
              <Clickable
                title={`Link para google play do ${title}`}
                href={googlePlayLink}
                target="_blanck"
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

import styles from './project.module.css';

import Button from '../../utils/button';

import { FaGithub, FaGooglePlay, FaGlobeAmericas } from 'react-icons/fa';

type ProjectFace = {
  title: string;
  imgUrl: string;
  repoLink?: string;
  siteLink?: string;
  googlePlayLink?: string;
};

function Project({
  title,
  imgUrl,
  repoLink,
  siteLink,
  googlePlayLink,
}: ProjectFace) {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.subcont}>
          <div className={styles.divimg}>
            <img src={imgUrl} alt={`Logo do projeto ${title}`} />
          </div>
          <div className={styles.title}>
            <h3>{title}</h3>
          </div>
          <div className={styles.links}>
            {repoLink ? (
              <Button
                title={`Repositório do projeto ${title}`}
                href={repoLink}
                target="_blanck"
                noStyle
              >
                <FaGithub />
              </Button>
            ) : (
              ''
            )}
            {siteLink ? (
              <Button
                title={`Web App do ${title}`}
                href={siteLink}
                target="_blanck"
                noStyle
              >
                <FaGlobeAmericas />
              </Button>
            ) : (
              ''
            )}
            {googlePlayLink ? (
              <Button
                title={`Link para google play do ${title}`}
                href={googlePlayLink}
                target="_blanck"
                noStyle
              >
                <FaGooglePlay />
              </Button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;

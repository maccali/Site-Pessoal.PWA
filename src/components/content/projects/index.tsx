import React from 'react';

import Button from '../../utils/button';
import ProjectCard from '../../cards/project';

import styles from './projects.module.css';

function ProjectsContent() {
  const projects = [
    {
      title: 'Apod Pictu',
      imgUrl: 'imgs/projects/apod.png',
      repoLink: 'https://github.com/maccali/Apod',
      siteLink: 'https://apod.pictu.one',
      googlePlayLink:
        'https://play.google.com/store/apps/details?id=one.pictu.apod.twa',
    },
    {
      title: 'Meu Site',
      imgUrl: 'imgs/projects/maccali.png',
      repoLink: 'https://github.com/maccali/Site-Pessoal',
      siteLink: 'https://guilhermemaccali.com',
    },
    {
      title: 'Marvel Shop',
      imgUrl: 'imgs/projects/marvel-shop.png',
      repoLink: 'https://github.com/maccali/marvel-shop',
      siteLink: 'https://marvel-shop.pictu.one',
    },
  ];

  return (
    <>
      <section id="projects">
        <div className={`container-fluid ${styles.cont}`}>
          <div className="container">
            <div className="row">
              <div className="col-xs">
                <div className={styles.title}>
                  <h2>Meus projetos</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {projects.map((item, key) => (
                <div key={key} className="col-xs col-md-3">
                  <ProjectCard
                    imgUrl={item.imgUrl}
                    title={item.title}
                    googlePlayLink={item.googlePlayLink}
                    repoLink={item.repoLink}
                    siteLink={item.siteLink}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsContent;
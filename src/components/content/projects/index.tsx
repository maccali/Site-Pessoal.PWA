import React from 'react'
import ProjectCard from '../../cards/project'

function ProjectsContent() {
  const projects = [
    {
      title: 'Apod Pictu',
      imgUrl: '/imgs/projects/apod.png',
      repoLink: 'https://github.com/maccali/Apod',
      siteLink: 'https://apod.pictu.one',
      googlePlayLink:
        'https://play.google.com/store/apps/details?id=one.pictu.apod.twa'
    },
    {
      title: 'Marvel Heroes',
      imgUrl: '/imgs/projects/marvel-heroes.png',
      repoLink: 'https://github.com/maccali/Marvel.PWA',
      siteLink: 'https://marvel-heroes.pictu.one'
    },
    {
      title: 'Meu Site',
      imgUrl: '/imgs/projects/maccali.png',
      repoLink: 'https://github.com/maccali/Site-Pessoal',
      siteLink: 'https://guilhermemaccali.com'
    }
  ]

  return (
    <section
      id="projects"
      className="bg-[#ededed] py-10 md:py-20 min-h-[calc(100vh-163px)]"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <h2 className="text-2xl md:text-3xl font-light font-montserrat">
            Meus projetos
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((item, key) => (
            <div key={key}>
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
    </section>
  )
}

export default ProjectsContent

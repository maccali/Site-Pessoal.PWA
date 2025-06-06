import React from 'react'

// External Libs
import type { Metadata } from 'next'

// Page Content
import SpacerContent from '../../components/content/spacer'
import SocialContent from '../../components/content/social'
import ProjectsContent from '../../components/content/projects'
import FooterContent from '../../components/content/footer'

export const metadata: Metadata = {
  title: 'Maccali, Guilherme'
}

function Projetos() {
  return (
    <>
      <Head>
        <title>Maccali, Guilherme - Projetos</title>
      </Head>
      <main>
        <SpacerContent />
        <SocialContent />
        <ProjectsContent />
        <FooterContent />
      </main>
    </>
  )
}

export default Projetos

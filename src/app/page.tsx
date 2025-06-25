import React from 'react'

// Page Content
import SpacerContent from '../components/content/spacer'
import SocialContent from '../components/content/social'
import AboutContent from '../components/content/about'
import CareerContent from '../components/content/career'
import EducationContent from '../components/content/education'
import ContactContent from '../components/content/contact'
import FooterContent from '../components/content/footer'

function Home() {
  return (
    <>
      <main>
        <SpacerContent />
        <SocialContent />
        <AboutContent />
        <CareerContent />
        <EducationContent />
        <ContactContent />
        <FooterContent />
      </main>
    </>
  )
}

export default Home

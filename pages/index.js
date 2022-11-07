import React from 'react'
import Page from '../components/layout/Page'
import Hero from '../components/HomePage/Hero'
import AboutUs from '../components/HomePage/AboutUs'
import Services from '../components/HomePage/Services'
import Services2 from '../components/HomePage/Services2'
import TrustedBy from '../components/HomePage/TrustedBy'
import Equipments from '../components/HomePage/Equipments'

export default function HomePage() {
  return (
    <Page title="Home">
      <Hero />
      <AboutUs />
      <Services />
      {/* <Services2 /> */}
      {/* <TrustedBy /> */}
      <Equipments />
    </Page>
  )
}

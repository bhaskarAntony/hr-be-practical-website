import React from 'react'
import HomeHero from '../components/HomeHero'
import Features from '../components/Features'
import Quote from '../components/Quote'
import Industries from '../components/Industries'
import WhyChoose from '../components/WhyChoose'
import Contact from '../components/Contact/Contact'
import Footer from '../components/footer/Footer'

function Home() {
  return (
    <div>
      <HomeHero/>
      <Features/>
      <Industries/>
      <Quote/>
      <WhyChoose/>
      <Contact/>
    
    </div>
  )
}

export default Home

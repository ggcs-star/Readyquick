import React from 'react'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import WhyChoose from './components/WhyChoose'
import OurPromise from './components/OurPromise'
import FinalCTA from './components/FinalCTA'
import TinderCards from './components/TinderCards'
import Dishes from './components/Dishes'
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <TinderCards />
      <HowItWorks />
      <Dishes />
      <WhyChoose />
      <OurPromise />
      <FinalCTA />
    </div>
  )
}

export default Home
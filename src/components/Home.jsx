import React from 'react';

import About from './home_components/About'
import Hero from './home_components/Hero';
import OurService from "./home_components/OurService";
import OurTeam from "./home_components/OurTeam";
import Pricing from "./home_components/Pricing"
import Partners from "./home_components/PartnerShip"



function Home() {
  return (
    <div>
      <div className="container">
        <Hero />
      <About />
      <OurTeam />
      <OurService />
      <Pricing />
      <Partners />
      
      </div>
      
    </div>
  );
}

export default Home;
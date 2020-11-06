import React from "react";

import About from "./home_components/About";
import Hero from "./home_components/Hero";
import OurService from "./home_components/OurService";
import OurTeam from "./home_components/OurTeam";
import Pricing from "./home_components/Pricing";
import Partners from "./home_components/PartnerShip";
import FAQ from "./home_components/Faq";

function Home(props) {
  return (
    <div>
      <div className="container">
        <Hero {...props} />
        <About {...props} className="home-components-padding" />
        <OurTeam className="home-components-padding" />
        <OurService className="home-components-padding" />
        <Pricing className="home-components-padding" />
        <Partners className="home-components-padding" />
        <FAQ className="home-components-padding" />
      </div>
    </div>
  );
}

export default Home;

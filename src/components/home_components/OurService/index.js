import React from "react";
import "./OurService.css";
// import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import ServiceCards from "./ServiceCards";

function Service() {
  return (
    <div className="service-container">
      <ScrollAnimation
        animateIn="animate__fadeInLeft"
        duration=".5"
        animateOnce={true}
      >
        <div className="service-header">OUR SERVICES</div>
        <div className="row service-body">
          <div className=" col-lg-6 col-md-12 service-cards">
            <ServiceCards />
          </div>
          {/* <ScrollAnimation animateIn="animate__fadeInRigh" duration=".2" animateOnce={true}> */}
            <div className=" col-lg-6 col-md-12 service-bg-img">
              
            </div>
        {/* </ScrollAnimation> */}
      </div>
      </ScrollAnimation>
     
    </div>
  );
}

export default Service;

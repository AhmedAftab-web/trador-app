import React from "react";
import "./PartnerShip.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import {Row,Col} from "react-bootstrap"
import ScrollAnimation from "react-animate-on-scroll";
import Partner1 from "../../../images/partners/hp.png"
import Partner2 from "../../../images/partners/ebay.png"
import Partner3 from "../../../images/partners/ibl.png"
import Partner4 from "../../../images/partners/lowes.png"
import Partner5 from "../../../images/partners/visa.png"
function PartnerShip() {
  return (
    <div>
      <div className="partnership-title">
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__fadeInLeft"
          duration="1"
        >
          <h1>PARTNERSHIP</h1>
        </ScrollAnimation>
      </div>
      <div>
        <div className="partnership-logos">
          <Row>
         <Col lg={4} md={6} sm={12} xs={12}>
         <ScrollAnimation
            animateOnce={true}
            animateIn="animate__bounceIn"
            duration="1"
          >
            <img src={Partner1} className="partnership-logo" />
          </ScrollAnimation>
         </Col>
         <Col lg={4} md={6} sm={12} xs={12}>
         <ScrollAnimation
            animateOnce={true}
            animateIn="animate__bounceIn"
            duration="1"
          >
            <img src={Partner2} className="partnership-logo" />
          </ScrollAnimation>
         </Col>
         <Col lg={4} md={6} sm={12} xs={12}>
         <ScrollAnimation
            animateOnce={true}
            animateIn="animate__bounceIn"
            duration="1"
          >
            <img src={Partner3} className="partnership-logo" />
          </ScrollAnimation>
         </Col>
         <Col lg={4} md={6} sm={12} xs={12}>
         <ScrollAnimation
            animateOnce={true}
            animateIn="animate__bounceIn"
            duration="1"
          >
            <img src={Partner4} className="partnership-logo" />
          </ScrollAnimation>
         </Col>
         <Col lg={4} md={6} sm={12} xs={12}>
         <ScrollAnimation
            animateOnce={true}
            animateIn="animate__bounceIn"
            duration="1"
          >
            <img src={Partner5} className="partnership-logo" />
          </ScrollAnimation>
         </Col>
         
         
         
          </Row>
        </div>
      </div>
    </div>
  );
}

export default PartnerShip;

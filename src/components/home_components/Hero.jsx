import React from "react";
import { Row, Col } from "react-bootstrap";
import "./styles/hero.css";
import ArrowButton from "./hero-components/ArrowButton";
import PlayButton from "./hero-components/PlayButton";
function Hero(props) {
  return (
    <div>
      <div className="hero-banner">
        <div className="hero-banner-empty"></div>
        <div className="hero-banner-bg">
          <Row>
            <div className="header-text">
              <Col lg={6}>
                <Row>
                  <Col lg={6}>
                    <h2 className="text-center text-white">Hero Header</h2>
                  </Col>
                  <Col lg={6}>
                    <div className="hero-header-border-b"></div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={2}>
                    <div className="left-bottom-border-box"></div>
                  </Col>
                  <Col lg={10}>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Impedit sint eaque tenetur itaque at totam facilis
                      corporis fugit nulla temporibus sunt cumque, blanditiis
                      quae? Reprehenderit voluptatem id assumenda expedita
                      perferendis!
                    </p>
                  </Col>
                </Row>
                <div className="hero-btn-container d-flex">
                    <span onClick={()=>props.history.push('/signin')}>
                  <ArrowButton />
                  </span>
                  <PlayButton />
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Hero;

import React from "react";
import "./styles/about.css";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
function About(props) {
    window.value=props
  return (
    <div>
      <section id="about">
        <div className="about-content">
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="about-content-text">
                <h1 className="text-uppercase about-h">
                  <u>About</u>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <ul>
                  <li>
                    {" "}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat{" "}
                  </li>
                  <li>
                    {" "}
                    Duis aute irure dolor in reprehenderit in voluptate velit{" "}
                  </li>
                  <li>
                    {" "}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat{" "}
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  quasi consectetur maxime nihil cumque libero? Adipisci aliquam
                  magni consequuntur nihil quod, exercitationem est ducimus
                  deleniti cum expedita doloribus, odio ad?
                </p>
                <div  className="about-link-div">
                  <text onClick={()=>props.history.push('/about')} className="service-read-more">Read More</text>
                  <i className="fa fa-arrow-right" />
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="about-bg-img"></div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
export default About;

import React from "react";
import "./signIn.css";
import ReCAPTCHA from "react-google-recaptcha";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useHistory } from "react-router-dom";
import { faCoffee, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
function SignIn(props) {
  return (
    <div>
      <div className="container-fluid">
        <Row>
          <Col lg={12}>
            <div className="signIn-card">
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="signIn-content text-center">
                    <span className="signIn-trador-logo text-white">
                      ALG<span className="logo-char-clr">O</span>SUTRAS
                    </span>
                    <p className="signIn-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Animi, at rem. Dolores explicabo odio perferendis
                      voluptate in saepe quam sit, animi provident? Autem
                      voluptate officiis repellendus excepturi provident ipsum?
                      Molestias?
                    </p>
                    <span onClick={()=>props.history.push('/signup')}>
                      <button className="signIn-content-btn m-2">
                        Don't have account
                      </button>
                    </span>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="signIn-form">
                    <h1 className="text-uppercase">Sign In</h1>
                    <form action="/action_page.php">
                      <div className="form-fil-area">
                        <label
                          className="form-label text-uppercase font-weight-bold"
                          for="email"
                        >
                          email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="someone@email.com"
                        ></input>
                        <label
                          className="form-label text-uppercase font-weight-bold"
                          for="password"
                        >
                          password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="*****"
                        ></input>
                      </div>
                      <div className="d-flex justify-content-center">
                        <input
                          className="signIn-btn"
                          type="submit"
                          value="Submit"
                        ></input>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default SignIn;

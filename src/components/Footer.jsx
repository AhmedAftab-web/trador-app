import React from 'react';
import {Link} from  'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faInstagram, faInstagramSquare } from '@fortawesome/free-brands-svg-icons' 

// library.add(faFacebookF); 
function Footer(){
    return(
        <div>
            <footer>
                <div className="upper-footer">
                  <Row>
                      
                      <Col lg={3}>
                          <Link className="footer-logo" to="/">
                          <h1 className="text-uppercase text-white footer-logo">ALG<span className="text-danger">O</span>SUTRAS.COM</h1>
                          </Link>
                          <ul className="company-info-list">
                              <li>
                                  <p className="text-info font-weight-bold">(A Division of PITTER SHARE BROKING PRIVATE LIMITED)</p>
                              </li>
                              <li>
                                  <p className="footer-major-text-clr" >228A, A J C Bose Road, Landmark 8E</p>
                              </li>
                              <li>
                              <p className="footer-major-text-clr" >Kolkata(West Bengal), 700020, INDIA</p>
                              </li>

                          </ul>
                     
                      </Col>
                      <Col lg={3}>
                      <div className="footer-list-text-conatiner footer-list-text-clr">
                              <h5>Useful Link</h5>
                              <ul className="footer-list-ul font-weight-bold">
                                  <li>
                                      <Link className="footer-list-link-clr" to="/">
                                        <span> > </span>Home
                                      </Link>
                                     </li>
                                     <li>
                                      <Link className="footer-list-link-clr" to="/about">
                                        <span> > </span>About us
                                      </Link>
                                     </li>
                                     <li>
                                      <Link className="footer-list-link-clr" >
                                        <span> > </span>Services
                                      </Link>
                                     </li>
                                     <li>
                                      <Link className="footer-list-link-clr" >
                                        <span> > </span>Terms of service
                                      </Link>
                                     </li>
                                     <li>
                                      <Link className="footer-list-link-clr">
                                        <span> > </span>Privacy policy
                                      </Link>
                                     </li>
                                 
                                  
                                  

                              </ul>
                          </div>
                      </Col>
                      <Col lg={3}>
                      <div className="footer-list-text-conatiner footer-list-text-clr ">
                              <h5>Our services</h5>
                              <ul className="footer-list-ul text-capitalize font-weight-bold ">
                                    <li className="footer-list-link-clr"><span> > </span>Algo Strategy Guidance</li>
                                    <li className="footer-list-link-clr"><span> > </span>Automate Algo Trading</li>
                                    <li className="footer-list-link-clr"><span> > </span>Backtesting Algo Strategies</li>
                                    <li className="footer-list-link-clr"><span> > </span>Trading Software development</li>

                              </ul>
                          </div>
                      </Col>
                      <Col lg={3}>
                      <div className="footer-list-text-conatiner footer-list-text-clr">
                              <h5>Our Social Networks</h5>
                              <ul className="footer-list-ul font-weight-bold">
                                  <li>Stay connected with us on our social media platforms </li>
                                  <li>
                                      
                                    <a className="footer-social-icons-clr" href=""><FontAwesomeIcon className="mr-2" icon={faFacebookF} /></a>
                                    <a className="footer-social-icons-clr" href=""><FontAwesomeIcon className="mr-2" icon={faTwitter} /></a>
                                    <a className="footer-social-icons-clr" href=""><FontAwesomeIcon className="mr-2" icon={faInstagram} /></a>


                                  </li>

                              </ul>
                          </div>
                          </Col>

                      

                  </Row>
                </div>
                <div className="lower-footer">
                    <Row>
                        <Col lg="8">
                            <span>  <i className="fa fa-copyright"></i>
                                    Design & Develop by NUI kit 2020
                            </span>
                        </Col>
                        <Col lg="2">
                        <text>Phone: +1 5589 55488 55</text>
                        </Col>
                        <Col lg="2">
                             <text>Email: enquiry@algosutras.com</text>
                        </Col>
                    </Row>
                </div>
            </footer>
        </div>
    )
}
export default Footer;

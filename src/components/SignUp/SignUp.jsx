import React from "react";
import "./signUp.css";
import ReCAPTCHA from "react-google-recaptcha";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useHistory } from "react-router-dom"
import { faCoffee, faFileCode } from "@fortawesome/free-solid-svg-icons";
import {Row, Col} from 'react-bootstrap'
function SignUp(props){
    return(
        <div>
            <div className="container-fluid">
            <Row>
                    <Col lg={12}>
                    <div className="signUp-card">
                       <Row>
                           <Col lg={6} md={6} sm={12} xs={12}>
                           <div className="signUp-content text-center">
                                <span  className="signUp-trador-logo text-white">ALG<span className="logo-char-clr">O</span>SUTRAS</span>
                                <p className="signUp-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, at rem. Dolores explicabo odio perferendis voluptate in saepe quam sit, animi provident? Autem voluptate officiis repellendus excepturi provident ipsum? Molestias?</p>
                                <span onClick={()=>props.history.push('/signin')}>
                                    <button className="signUp-content-btn m-2">Already have an account</button>
                                </span>
                            </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="signUp-form">
                                <h1 className="text-uppercase">Sign Up</h1>
                                <form action="/action_page.php">
                                    <div className="form-fil-area">
                                        <label className="form-label text-uppercase font-weight-bold" for="name">name</label>
                                        <input type="text" id="name" name="name" placeholder=""></input>
                                        <label className="form-label text-uppercase font-weight-bold" for="email">email</label>
                                        <input type="email" id="email" name="email" placeholder=""></input>
                                        <label className="form-label text-uppercase font-weight-bold" for="phone">phone</label>
                                        <input type="phone" id="phone" name="phone" placeholder=""></input>
                                        <label className="form-label text-uppercase font-weight-bold" for="password">password</label>
                                        <input type="password" id="password" name="password" placeholder=""></input>
                                        <label className="form-label text-uppercase font-weight-bold" for="re-password">confirm password</label>
                                        <input type="password" id="re-password" name="re-password" placeholder=""></input>
        
                                    </div>
                                    <div className="ml-1">
                                        <input type="checkbox" id="terms" name="terms" value=""></input>
                                        <label for="terms"> I agree the terms and conditions</label>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <input className="signUp-btn" type="submit" value="Submit"></input>
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

    )
}
export default SignUp;
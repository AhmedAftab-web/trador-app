import React from "react";
import AboutPage from "../components/AboutPage/AboutPage";
import Home from "../components/Home";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Contact from "../components/contact/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Routes(props) {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
      <Navbar {...props} />
        <Switch>
            
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={AboutPage} />
        </Switch>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routes;

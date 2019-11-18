import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Nav from "../components/nav/Nav";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Code from "../pages/about/code/Code"; 
import Design from "../pages/about/design/Design"

export default function ReactRouter() {
  return (
    <>
      <Nav />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/about/code" component={Code} />
      <Route path="/about/design" component={Design} />
    </>
  );
}

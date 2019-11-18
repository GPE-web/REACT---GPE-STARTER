import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Nav from "../components/nav/Nav";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

export default function ReactRouter() {
  return (
    <>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </>
  );
}

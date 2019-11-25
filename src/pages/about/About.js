import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h2>ABOUT is here</h2>
      <h3>PROJETS</h3>
      <ul>
        <li>
          <Link to="/about/design">DESIGN</Link>
        </li>
        <li>
          <Link to="/about/code">CODE</Link>
        </li>
      </ul>
    </div>
  );
}

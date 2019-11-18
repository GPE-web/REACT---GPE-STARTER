import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div>
        <NavLink exact to="/">
          <h2>
            GPE / STARTER
          </h2>
        </NavLink>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/about"><h3>ABOUT</h3></NavLink>
          </li>
          <li>
            <NavLink to="/contact"><h3>CONTACT</h3></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

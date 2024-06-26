import React from "react";
import "./navbar.css";
import { Outlet } from "react-router-dom";

function Navbar({ children }) {
  return (
    <div>
      <div className="navbar_container">
        <div className="left">
          <h1>Peter's Portfolio</h1>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href="resume/CANVA_proof_II-AY7N0sfBsmkw.pdf" target="_blank">
                About
              </a>
              {/* <a href="">About</a> */}
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="resume/CANVA_proof_II-AY7N0sfBsmkw.pdf" target="_blank">
                Profile
              </a>
              {/* <a href="">Profile</a> */}
            </li>
            <a
              href="resume/CANVA_proof_II-AY7N0sfBsmkw.pdf"
              target="_blank"
              className="contact"
            >
              Contact Me
            </a>

            {/* <button className="contact">Contact Me</button> */}
          </ul>
        </div>
      </div>
      {children}
      <Outlet />
    </div>
  );
}

export default Navbar;

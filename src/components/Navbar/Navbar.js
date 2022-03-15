import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";
import M from "materialize-css";

import logo from "../../images/logo.png";


export const Navbar = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }, []);

  return (
    <div>
      <nav className="nav-style">
        <div className="container">
          <div class="nav-wrapper">
            <Link to="/" class="brand-logo">
              <img src={logo} className="responsive-img" />
            </Link>
            <Link to="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </Link>
            <ul class="right hide-on-med-and-down">
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">PORTFOLIO</NavLink>
              </li>
              <li>
                <NavLink to="/team">TEAM</NavLink>
              </li>
              <li>
                <NavLink to="/blog">BLOG</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT US</NavLink>
              </li>
              <li>
                <NavLink to="/investorportal">INVESTOR PORTAL</NavLink>
              </li>
              <li>
                <Link to="/blogpost" class=" btn contact-button">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ul class="sidenav nav-style" id="mobile-demo">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">PORTFOLIO</NavLink>
        </li>
        <li>
          <NavLink to="/team">TEAM</NavLink>
        </li>
        <li>
          <NavLink to="/blog">BLOG</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to="/investorportal">INVESTOR PORTAL</NavLink>
        </li>
        <li>
          <Link to="/" class=" btn contact-button">
            CONTACT US
          </Link>
        </li>
      </ul>
    </div>
  );
};

import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../images/logo.png";

export const Footer = () => {
  return (
    <div class="container">
      <div className="footers">
        <footer class=" transparent">
          <div class="row">
            <div class="col s12 m2 l2">
              <p class="white-style">Company</p>
              <ul>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Our mission
                  </NavLink>
                </li>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Our goals
                  </NavLink>
                </li>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Our core values
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* second col */}

            <div class="col s12 m2 l2">
              <p class="white-style">Portfolio</p>
              <ul>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Sectors
                  </NavLink>
                </li>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Companies
                  </NavLink>
                </li>
              </ul>
            </div>

            <div class="col s12 m2 l2">
              <p class="white-style">Industry</p>
              <ul>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Our mission
                  </NavLink>
                </li>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Our goals
                  </NavLink>
                </li>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Our core values
                  </NavLink>
                </li>
              </ul>
            </div>

            <div class="col s12 m2 l2">
              <p class="white-style">Media</p>
              <ul>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Events calendar
                  </NavLink>
                </li>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Newsletter
                  </NavLink>
                </li>
              </ul>
            </div>

            <div class="col s12 m2 l2">
              <p class="white-style">Our Team</p>
              <ul>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Senior management
                  </NavLink>
                </li>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Associates
                  </NavLink>
                </li>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Teams
                  </NavLink>
                </li>
              </ul>
            </div>

            <div class="col s12 m2 l2">
              <p class="white-style">Contact us</p>
              <ul>
                <li>
                  <NavLink class="grey-style" to="#!">
                    Office locations
                  </NavLink>
                </li>
                <li>
                  <NavLink class="grey-style" to="#!">
                    info@theplatformcapital.com
                  </NavLink>
                </li>
                <li>
                  <NavLink class="grey-style" to="#!">
                    +234 70 3778 6423
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-copyright">
            <div style={{ marginTop: "10rem" }} className="last-section">
              <div className="b-logo">
                <Link to="#!" class="brand-logo">
                  <img src={logo} className="responsive-img" />
                </Link>
              </div>
              <div>
                <div className="footer-icons">
                  <Link to="">
                    <i
                      class="fab fa-linkedin fa-2x foo"
                      style={{ color: "#4fc3f7" }}
                    ></i>
                  </Link>
                  <Link to="">
                    <i
                      class="fab fa-twitter fa-2x foo"
                      style={{ color: "#29b6f6" }}
                    ></i>
                  </Link>
                  <Link to="">
                    <i
                      class="fab fa-instagram fa-2x foo"
                      style={{ color: "#ef5350" }}
                    ></i>
                  </Link>
                  <Link to="">
                    <i
                      class="fab fa-facebook fa-2x foo blue-text"
                      style={{ textColor: "#01579b" }}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="reserved-rights">
              © Platform Capital Group 2022. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

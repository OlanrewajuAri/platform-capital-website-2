import React, { useEffect, useRef } from "react";

import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";
import M from "materialize-css";

import logos from "../../images/logos.png";
import mess1 from "../../images/mess1.png";
import mess2 from "../../images/mess2.png";
import mess3 from "../../images/mess3.png";
import mess4 from "../../images/mess4.png";

export const Navbar = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
    const elem = document.querySelectorAll(".modal");
    M.Modal.init(elem, {
      inDuration: 1000,
      opacity: 0.1,
    });
    const el = document.querySelectorAll(".tabs");
    M.Tabs.init(el, {});
  }, []);

  return (
    <div>
      <nav className="nav-style">
        <div className="container">
          <div class="nav-wrapper">
            <Link to="/" class="brand-logo">
              <img src={logos} className="responsive-img" />
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
                <button data-target="modal1" class="btn modal-trigger">
                  Contact us
                </button>
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

      {/* modal */}
      <div className="mod">
        <div id="modal1" class="modal">
          <div className="top-modal">
            <div className="modal-logo">
              <Link to="/" className=" brand-logo modal-close">
                <img src={logos} className="responsive-img" />
              </Link>
            </div>
            <div class="modal-footers">
              <Link to="#!" class="modal-close waves-effect btn-flat">
                <h4>x</h4>
              </Link>
            </div>
          </div>
          <div class="modal-content">
            <div className="spread">
              <div className="connect">
                <h1>Connect with us</h1>
                <h6>
                  While leveraging on our local presence, global network,
                  operating experience
                </h6>
                <p>Follow us on social media</p>
                <div className="">
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
              <div className="form-data">
                <ul id="tabs-swipe-demo" class="tabs">
                  <li class="tab col s3">
                    <a class="active" href="#test-swipe-1">
                      Message
                    </a>
                  </li>
                  <li class="tab col s3">
                    <a href="#test-swipe-2">Office</a>
                  </li>
                  <li class="tab col s3">
                    <a href="#test-swipe-3">Email</a>
                  </li>
                </ul>
                <div id="test-swipe-1" class="field1">
                  <div class="input-field ">
                    <input placeholder="Full name" type="text" />

                    <input placeholder="Email address" type="email" />

                    <textarea
                      style={{ color: "white" }}
                      placeholder="Leave us a message to connect back with you"
                      class="materialize-textarea"
                      type="textarea"
                    ></textarea>

                    {/* <textarea
                      rows="4"
                      cols="50"
                      name="comment"
                      placeholder="Leave us a message to connect back with you"
                    ></textarea> */}
                  </div>
                  <button class="btn waves-effect waves-light" type="submit">
                    Send message
                  </button>
                </div>
                <div id="test-swipe-2">
                  <div className="office-location">
                    <h6>Office locations</h6>
                    <div className="contact-main">
                      <div className="contact-icone">
                        <i class="fas fa-map-marker-alt foos"></i>
                      </div>
                      <div className="text1">
                        <h6>Lagos, Nigeria</h6>
                        <p>
                          319, Akin Ogunlewe Rd, Off Ligali Ayorinde, Victoria
                          Island, Lagos.
                        </p>
                      </div>
                    </div>
                    <div className="contact-main">
                      <div className="contact-icone">
                        <i class="fas fa-map-marker-alt foos"></i>
                      </div>
                      <div className="text1">
                        <h6>Accra, Ghana</h6>
                        <p>
                          Atlantic Towers, Plot 16 Airport city, Accra, Ghana.
                        </p>
                      </div>
                    </div>
                    <div className="contact-main">
                      <div className="contact-icone">
                        <i class="fas fa-map-marker-alt foos"></i>
                      </div>
                      <div className="text1">
                        <h6>Sandton, South Africa</h6>
                        <p>
                          13 Fredman Drive Freedman Towers Floor 8 Sandton
                          Sandown 2196.
                        </p>
                      </div>
                    </div>
                    <div className="contact-main">
                      <div className="contact-icone">
                        <i class="fas fa-map-marker-alt foos"></i>
                      </div>
                      <div className="text1">
                        <h6>Mexico city, Mexico</h6>
                        <p>
                          Julio Verne 89 Col, Polanco Chaplepec, 11560, Mexico
                          city.
                        </p>
                      </div>
                    </div>
                    <div className="contact-main">
                      <div className="contact-icone">
                        <i class="fas fa-map-marker-alt foos"></i>
                      </div>
                      <div className="text1">
                        <h6>Dallas, Texas</h6>
                        <p>6400 Pinecrest Dr, Piano, TX Kampala.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="test-swipe-3">
                  <div className="office-location">
                    <h6>Support</h6>
                    <div className="contact-mains">
                      <div className="contact-icone">
                        <img src={mess1} className="responsive-img" />
                      </div>
                      <div className="text1">
                        <h6>Client Service</h6>
                        <p>clientservice@theplatformcapital.com</p>
                      </div>
                    </div>
                    <div className="contact-mains">
                      <div className="contact-icone">
                        <img src={mess2} className="responsive-img" />
                      </div>
                      <div className="text1">
                        <h6>Info</h6>
                        <p>info@theplatformcapital.com</p>
                      </div>
                    </div>
                    <div className="contact-mains">
                      <div className="contact-icone">
                        <img src={mess3} className="responsive-img" />
                      </div>
                      <div className="text1">
                        <h6>Brand capital</h6>
                        <p>brandcapital@theplatformcapital.com</p>
                      </div>
                    </div>
                    <div className="contact-mains">
                      <div className="contact-icone">
                        <img src={mess4} className="responsive-img" />
                      </div>
                      <div className="text1">
                        <h6>Ponmile Osibo</h6>
                        <p>p.osibo@theplatformcapital.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

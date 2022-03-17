import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./About.css";

import woman from "../../images/woman.png";
import about1 from "../../images/about1.png";
import { OurMission } from "../../components/OurMission/OurMission";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { Portfolio1 } from "../../components/Portfolio1/Portfolio1";
import { useDocumentTitle } from "../../components/TitleChange/TitleChange";
import { AnimatePage } from "../../components/Animate/AnimatePage";
import { motion } from "framer-motion";

export const About = () => {
  useDocumentTitle("Platform | About");
  return (
    
      <div>
        <div className="container">
          <div className="main">
            <motion.div
              className="section1-1"
              initial={{ y: "-100vh", zIndex: -2 }}
              animate={{ y: 0 }}
              transition={{ delay: 0, duration: 1 }}
            >
              <h3>We are passionate about changing the african narrative.</h3>
              <h6>
                we are growth markets focused, sector agnostic, principal
                investment, and advisory firm. we also deploy patient, value
                accretive capital alongside international and local investors to
                create businesses with the potential for regional or global
                scale.
              </h6>
              <div className="link">
                <Link to="" class="btn">
                  Learn more about us
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="image"
              initial={{ y: "-100vh", zIndex: -2 }}
              animate={{ y: 0 }}
              transition={{ delay: 0, duration: 1 }}
            >
              <img src={woman} alt="Image" className="responsive-img" />
            </motion.div>

            <motion.div
              className="icons"
              initial={{ y: "-100vh", zIndex: -2 }}
              animate={{ y: 0 }}
              transition={{ delay: 0, duration: 1 }}
            >
              <Link to="">
                <i
                  class="fab fa-linkedin fa-1x foos"
                  style={{ color: "#4fc3f7" }}
                ></i>
              </Link>
              <Link to="">
                <i
                  class="fab fa-instagram fa-1x foos"
                  style={{ color: "#ef5350" }}
                ></i>
              </Link>
              <Link to="">
                <i
                  class="fab fa-youtube fa-1x foos"
                  style={{ color: "#b71c1c" }}
                ></i>
              </Link>
              <Link to="">
                <i
                  class="fas fa-envelope fa-1x foos"
                  style={{ color: "#a1887f" }}
                ></i>
              </Link>
            </motion.div>
          </div>

          {/* partners */}

          <div className="partner-top">
            <h6 className="partners-about">OUR PARTNERS</h6>
          </div>
          <div className="container-partner">
            <div className="partner-div"></div>
            <div className="partner-div"></div>
            <div className="partner-div"></div>
            <div className="partner-div"></div>
            <div className="partner-div"></div>
          </div>

          <div className="porfolio-companys">
            <h2>We deploy patient, value & accretive capital</h2>
            <p>
              Platform also provides end-to -end bespoke Corporate Finance &
              Capital Markets advisory services.
            </p>
          </div>

          {/* 880 region presence */}

          <div className="section3-3">
            <div className="portfolio">
              <h2>880</h2>
              <h6>Region Presence</h6>
            </div>
            <div className="portfolio">
              <h2>500+</h2>
              <h6>Employees</h6>
            </div>
            <div className="portfolio">
              <h2>$1BN+</h2>
              <h6>Portfolio Valuation</h6>
            </div>
            <div className="portfolio">
              <h2>123+</h2>
              <h6>Portfolio companies</h6>
            </div>
          </div>

          {/* our mission */}

          <div className="roots">
            <div className="main-values">
              <div className="woman3">
                <img src={woman} alt="image" className="responsive-img" />
              </div>
              <div className="values1">
                <h2>Our mission</h2>
                <p>
                  To buid the leading growth market focused, invested & Advisory
                  firm, generating globally competitive returns by combining a
                  deep knowledge of the markets we operate in, an
                  entrepreneurial business building approach, and strong local
                  and global connectivity.
                </p>
                <div className="award1">
                  <div className="award1-icons">
                    <i class="fas fa-award fa-2x award-icon"></i>
                  </div>
                  <div className="BIF">
                    <h6>Best Investment Firm</h6>
                    <p>Business Day Awards 2021</p>
                  </div>
                </div>
                <div className="award2">
                  <div className="award2-icons">
                    <i class="fas fa-award  fa-2x award-icon"></i>
                  </div>
                  <div className="BIF">
                    <h6>Best Investment Firm</h6>
                    <p>Business Day Awards 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* our mission */}

          <OurMission />

          {/* leading providers of investment */}

          <div className="main3-about">
            <h4 className="section3-1-about">
              We are leading providers of investment and advisory services to
              businesses globally
            </h4>
            <h6 className="section3-2-about">
              Platform Capital is a growth markets focused, sector agnostic,
              principal investment, and advisory firm. Platform Capital deploys
              patient, value accretive capital alongside international and local
              value investors to create champion businesses with the potential
              for regional or global scale.
            </h6>
          </div>

          {/* full width image */}

          <div>
            <img
              src={about1}
              alt="image"
              className="responsive-img"
              style={{ marginTop: "7rem" }}
            />
          </div>

          <div className="bottom-buttons">
            <div className="about-buttons">
              <NavLink to="/all" class="  blog-btn">
                <span className="button-icons">
                  <i class="fas fa-hand-holding-medical"></i>
                </span>
                Health Care
              </NavLink>
              <NavLink to="/latest" class=" blog-btn">
                <span className="button-icons">
                  <i class="fas fa-globe"></i>
                </span>
                Technology
              </NavLink>
              <NavLink to="/popular" class=" blog-btn">
                <span className="button-icons">
                  <i class="fas fa-coins"></i>
                </span>
                Financial Services
              </NavLink>
              <NavLink to="/announcement" class=" blog-btn">
                <span className="button-icons">
                  <i class="fas fa-tractor"></i>
                </span>
                Food value chain
              </NavLink>
              <NavLink to="/events" class=" blog-btn">
                <span className="button-icons">
                  <i class="fas fa-truck"></i>
                </span>
                Logistics & mobility
              </NavLink>
              <NavLink to="/investments" class=" blog-btn">
                <span className="button-icons">
                  <i class="fas fa-bolt"></i>
                </span>
                Energy
              </NavLink>
              <NavLink to="/investments" class=" blog-btn">
                <span className="button-icons">
                  <i class="fas fa-industry"></i>
                </span>
                Industrials
              </NavLink>
              <NavLink to="/investments" class=" blog-btn">
                <span className="button-icons">
                  <i class="fas fa-film"></i>
                </span>
                Media
              </NavLink>
            </div>
          </div>

          {/* stay connected */}

          <div className="main-stay-connected">
            <div className="stay-connected">
              <h2>Stay connected and find out what’s going on</h2>
              <p>
                We leverage our local presence, global network, operating
                experience, technical partnerships, and knowledge to champion
                businesses.
              </p>
              <a class="waves-effect waves-light btn btn-large">
                See our portfolios
              </a>
            </div>

            <div className="leverage-300">
              <div className="leverage">
                <h1>300</h1>
                <h6>While leveraging</h6>
              </div>
              <div className="leverage">
                <h1>300</h1>
                <h6>While leveraging</h6>
              </div>
              <div className="leverage">
                <h1>300</h1>
                <h6>While leveraging</h6>
              </div>
              <div className="leverage">
                <h1>300</h1>
                <h6>While leveraging</h6>
              </div>
            </div>
          </div>

          {/* stay connected 2 */}

          <div className="main-stay-connected">
            <div className="leverage-3001">
              <div className="leverage">
                <h1>123</h1>
                <h6>Portfolio companies</h6>
              </div>
              <div className="leverage">
                <h1>300</h1>
                <h6>While leveraging</h6>
              </div>
              <div className="leverage">
                <h1>300</h1>
                <h6>While leveraging</h6>
              </div>
              <div className="leverage">
                <h1>300</h1>
                <h6>While leveraging</h6>
              </div>
            </div>

            <div className="stay-connected">
              <h2>Stay connected and find out what’s going on</h2>
              <p>
                We leverage our local presence, global network, operating
                experience, technical partnerships, and knowledge to champion
                businesses.
              </p>
              <a class="waves-effect waves-light btn btn-large">
                See our portfolios
              </a>
            </div>
          </div>

          {/* our portfolio-about */}

          <Portfolio />

          {/* button */}
          <div className="button-pri">
            <Link to="" class=" btn-large">
              Learn more about us
            </Link>
          </div>

          <OurMission />
          <Portfolio1 />
          <Newsletter />
        </div>
        );
      </div>
    
  );
};

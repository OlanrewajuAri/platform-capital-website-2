import React, { useEffect } from "react";
import AOS from "aos";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Home3.css";
import woman from "../../images/woman.png";

import { Video } from "./Video";
import { Newsletter } from "../Newsletter/Newsletter";
import { Portfolio } from "../Portfolio/Portfolio";

export const Home3 = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { duration: 2, type: "tween" },
      });
    } else {
      animation.start({
        x: "100vw",
        transition: { duration: 5, type: "tween" },
      });
    }
  }, [inView]);

  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
      delay: 400,
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="container">
      <div className="main3">
        <h4 className="section3-1">
          We are a growth markets focused sector agnostic invesment firm
        </h4>
        <h6 className="section3-2">
          We deploy patient, value accretive capital alongside international and
          local value investors to create and champion businesses with the
          potential for regional or global scale.
        </h6>
      </div>
      <div className="section3-3" data-aos="zoom-in">
        <div className="portfolio">
          <h2>$1BN+</h2>
          <h6>Portfolio Valuation</h6>
        </div>
        <div className="portfolio">
          <h2>123+</h2>
          <h6>Portfolio companies</h6>
        </div>
        <div className="portfolio">
          <h2>60+</h2>
          <h6>Employees</h6>
        </div>
        <div className="portfolio">
          <h2>9</h2>
          <h6>Sector Verticals</h6>
        </div>
      </div>

      <div ref={ref} className="roots">
        <div className="main-values">
          <div className="woman3">
            <img src={woman} alt="image" className="responsive-img" />
          </div>
          <div className="values">
            <h6>OUR CORE VALUES</h6>
            <motion.h1 animate={animation}>Brother’s Keeper</motion.h1>
            <motion.h2 animate={animation}>Loyalty</motion.h2>
            <motion.h2 animate={animation}>Authenticity</motion.h2>
            <motion.h2 animate={animation}>Capacity</motion.h2>
            <motion.h2 animate={animation}>Knowledge</motion.h2>
          </div>
        </div>
      </div>
      <Video />

      <div className="investment">
        <h6>WHAT WE DO</h6>

        <h2>Our Investment Thesis</h2>

        <p className="investment1">
          We cover three key areas which are Principal Investments, Advisory and
          Investment Fiduciary.
        </p>
      </div>
      <div className="key-areas">
        <div className="area">
          <i class="fas fa-landmark icons"></i>
          <h5>Principal Investment</h5>
          <p>
            We provide long-term capital to our investee companies, and work
            with them to achieve set goals. Long-term capital offers stability
            to the business, and allows entrepreneurs to focus on delivering the
            vision.
          </p>
        </div>
        <div className="area">
          <i class="fas fa-landmark icons"></i>
          <h5>Advisory</h5>
          <p>
            Our holistic approach towards identifying opportunities,
            structuring, negotiations, capital raise and active management makes
            us a unique partner across all our engagements.
          </p>
        </div>
        <div className="area">
          <i class="fas fa-landmark icons"></i>
          <h5>Investment Fiduciary</h5>
          <p>
            We leverage our senior leadership team’s experience across multiple
            sectors and geographies coupled with our investpreneurship skillset
            to manage third-party businesses and assets as fiduciaries.
          </p>
        </div>
      </div>

      <div className="main-consumer-led-factors">
        <div className="video1">
          <video
            width="100%"
            height="150%"
            controls
            poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg"
          >
            <source
              src="https://archive.org/download/ElephantsDream/ed_hd.ogv"
              type="video/ogg"
            />
            <source
              src="https://archive.org/download/ElephantsDream/ed_hd.avi"
              type="video/avi"
            />
            <source
              src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="consumer-led-sectors">
          <h3>We are focused on last-mile consumer-led sectors</h3>
          <p>
            Our strategy focuses on our Anchor verticals - Energy, industrials,
            Telecommunications, Media, Technology & Payments (TMTP), and the
            Food Value Chain.
            <p>
              The Service and Support verticals also meet the criteria above,
              however, they have many sub-sector themes that are driven by the
              Anchor verticals.
            </p>
          </p>
        </div>
      </div>

      {/* what are portfolio companies say */}

      <Portfolio />
      <div className="partner-top">
        <h6 className="partners">OUR PARTNERS</h6>
      </div>
      <div className="container-partner">
        <div className="partner-div"></div>
        <div className="partner-div"></div>
        <div className="partner-div"></div>
        <div className="partner-div"></div>
        <div className="partner-div"></div>
      </div>

      {/* newsletter */}

      <Newsletter />
    </div>
  );
};

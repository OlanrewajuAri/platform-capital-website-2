import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home1.css";

import woman from "../../images/woman.png";

export const Home1 = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="section1-1">
          <h3>We are champions building sustainable entreprises</h3>
          <h6>
            We leverage our local presence, global network, operating
            experience, technical partnerships, and knowledge to champion,
            invest and grow businesses on a global scale.
          </h6>

          <motion.div
            className="link"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 1.5, duration: 3 }}
          >
            <Link to="" class="btn">
              Learn more about us
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 3 }}
        >
          <img src={woman} alt="Image" className="responsive-img" />
        </motion.div>

        <motion.div
          className="icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 3 }}
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
    </div>
  );
};

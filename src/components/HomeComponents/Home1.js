import React from "react";
import { Link } from "react-router-dom";

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
          <div className="link">
            <Link to="" class="btn">
              Learn more about us
            </Link>
          </div>
        </div>
        <div className="image">
          <img src={woman} alt="Image" className="responsive-img" />
        </div>

        <div className="icons">
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
        </div>
      </div>
    </div>
  );
};

import React, { useEffect } from "react";
import "./Newsleter.css";
import AOS from "aos";

export const Newsletter = () => {
  useEffect(() => {
    AOS.init({
      duration:500
    });
  }, []);

  return (
    <div>
      <div className="general-news" data-aos="zoom-in">
        <div className="newsletter">
          <h2>Suscribe to our newsletter</h2>
          <div className="news">
            <p>
              We leverage our local presence, global network, operating
              experience, technical partnerships, and knowledge to champion
              businesses.
            </p>
          </div>
          <div class="input-field">
            <i class="material-icons prefix" style={{ color: "#6BA6FF" }}>
              mail
            </i>
            <input id="icon_prefix" type="email" />
            <label for="icon_prefix">Your email address</label>
          </div>
          <span>
            <button class="btn btn-large" type="submit">
              Submit
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

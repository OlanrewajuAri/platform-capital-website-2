import React from 'react'

import './Portfolio.css'

import image1 from "../../images/image1.png";

export const Portfolio = () => {
  return (
    <div>
      <div className="porfolio-company">
        <h2>What our Portfolio companies say</h2>
        <p>We are passionate about changing the african narrative</p>
      </div>
      {/* three divs under */}

      <div className="our-subsidiaries">
        <div className="portfolio-companies">
          <div className="flag"></div>
          <i class="fas fa-quote-left fa-2x" style={{ color: "#FAFBFB" }}></i>
          <p className="port-para">
            Platform Capital’s investment philosophy truly embodies “beyond
            capital”, their guidance and support enabled me to improve on my
            business model, scale into 3 countries and develop partnerships in 3
            continents.
          </p>
          <div className="bottom">
            <div className="image">
              <img src={image1} />
            </div>
            <div className="ceo">
              <h6>Fade Ogunro</h6>
              <p>CEO, Bookings Africa</p>
            </div>
          </div>
        </div>

        <div className="portfolio-companies">
          <div className="flag"></div>
          <i class="fas fa-quote-left fa-2x" style={{ color: "#FAFBFB" }}></i>
          <p className="port-para">
            Platform has been a strong investor and partner for Koniku providing
            invaluable financial & strategic support and governance frameworks
            that have been critical to the company’s growth and positioning.
          </p>
          <div className="bottom">
            <div className="image">
              <img src={image1} />
            </div>
            <div className="ceo">
              <h6>Osh Agabi</h6>
              <p>CEO, Koniku</p>
            </div>
          </div>
        </div>

        <div className="portfolio-companies">
          <div className="flag"></div>
          <i class="fas fa-quote-left fa-2x" style={{ color: "#FAFBFB" }}></i>
          <p className="port-para">
            Platform believed in us from the first meeting. I have only ever
            felt championed and like I have a family of support on my side. They
            have gone above and beyond for our fund and I am grateful.
          </p>
          <div className="bottom">
            <div className="image">
              <img src={image1} />
            </div>
            <div className="ceo">
              <h6>Maya Horgan Famodu</h6>
              <p>Managing Partner, Ingressive Capital</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

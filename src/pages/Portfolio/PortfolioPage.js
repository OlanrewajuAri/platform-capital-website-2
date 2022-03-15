import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioPage.css";
import { Grid } from "../../components/Image-Grid/Grid";
import { Portfolio1 } from "../../components/Portfolio1/Portfolio1";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { useDocumentTitle } from "../../components/TitleChange/TitleChange";
import { AnimatePage } from "../../components/Animate/AnimatePage";

export const PortfolioPage = () => {
  useDocumentTitle("Platform | Porfolio");
  return (
    <AnimatePage>
      <div className="container">
        <div className="D-grid1">
          <div className="section1-team">
            <h3>Our Portfolio: Meet the change makers</h3>
            <h6>
              Platform Capital is a growth markets focused, sector agnostic,
              principal investment, and advisory firm. Platform Capital deploys
              patient, value accretive capital alongside.
            </h6>
          </div>
          <div className="grid-pic">
            <Grid />
          </div>
        </div>

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

        {/* mission */}

        <div className="our-footprint">
          <div>
            <h6 className="footprint-portfolio">OUR MISSION</h6>
            <h3 className="passionate-portfolio">
              We are passionate about changing the African narrative
            </h3>
          </div>
        </div>

        {/* bookings africa */}

        <div className="africa">
          <div className="book">
            <div className="orange-top">
              <h2>Bookings </h2>
              <h5>Africa.com</h5>
            </div>
            <div className="body1">
              <h5>Bookings Africa: Leading Africa through technology</h5>
              <h6>Technology</h6>
              <p>
                Bookings Africa (BA) is a leading pan-African digital work
                platform that enables Africa's gig workforce digitise and
                monetise their skill by connecting clients efficiently and
                transparently to talented professionals in Nigeria, Kenya and
                South Africa. Its CEO, Fade Ogunro, was recently appointed as a
                member of the Global Campaign.
              </p>
              <Link to="" class="waves-effect waves-light btn">
                <i class="fa fa-external-link" aria-hidden="true"></i>
                Visit Bookings Africa
              </Link>
            </div>
          </div>

          <div className="book1">
            <div className="blue-top">
              <h2>Bookings </h2>
              <h5>Africa.com</h5>
            </div>
            <div className="body1">
              <h5>Bookings Africa: Leading Africa through technology</h5>
              <h6>Technology</h6>
              <p>
                Bookings Africa (BA) is a leading pan-African digital work
                platform that enables Africa's gig workforce digitise and
                monetise their skill by connecting clients efficiently and
                transparently to talented professionals in Nigeria, Kenya and
                South Africa. Its CEO, Fade Ogunro, was recently appointed as a
                member of the Global Campaign.
              </p>
              <Link to="" class="waves-effect waves-light btn">
                <i class="fa fa-external-link" aria-hidden="true"></i>
                Visit Bookings Africa
              </Link>
            </div>
          </div>
        </div>

        {/* show more link */}

        <div className="show-more">
          <Link to="" class="waves-effect waves-light btn">
            Show more
          </Link>
        </div>

        <Portfolio1 />

        <Portfolio />

        <Newsletter />
      </div>
    </AnimatePage>
  );
};

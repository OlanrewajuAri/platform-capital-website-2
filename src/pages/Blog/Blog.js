import React from "react";
import { NavLink } from "react-router-dom";
import "./Blog.css";

import blog1 from "../../images/blog1.png";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { useDocumentTitle } from "../../components/TitleChange/TitleChange";
import { AnimatePage } from "../../components/Animate/AnimatePage";

export const Blog = () => {
  useDocumentTitle("Platform | Blog");
  return (
    <AnimatePage>
      <div className="container">
        <div className="connected">
          <h1>Stay connected and find out what’s going on</h1>
        </div>
        <div className="blog">
          <div className="buttons">
            <NavLink to="" class="  blog-btn">
              All
            </NavLink>
            <NavLink to="#" class=" blog-btn">
              Latest
            </NavLink>
            <NavLink to="" class=" blog-btn">
              Popular
            </NavLink>
            <NavLink to="" class=" blog-btn">
              Announcement
            </NavLink>
            <NavLink to="" class=" blog-btn">
              Events
            </NavLink>
            <NavLink to="" class=" blog-btn">
              Investments
            </NavLink>
          </div>
        </div>

        {/* cards */}
        <div className="main-card">
          <div class="card-style">
            <div class="card-image">
              <img src={blog1} className="responsive-img" />
            </div>
            <div className="content">
              <div className="para">
                <p>Announcement</p>
              </div>

              <h6>
                Platform Capital Invests in LEO Flight, The World’s First Flying
                Electric Jet Car Company
              </h6>

              <div class="bottom">
                <span>27 November, 2020</span>
                <span>7 mins read</span>
              </div>
            </div>
          </div>

          <div class="card-style">
            <div class="card-image">
              <img src={blog1} className="responsive-img" />
            </div>
            <div className="content">
              <div className="para">
                <p>Announcement</p>
              </div>

              <h6>
                Platform Capital Invests in LEO Flight, The World’s First Flying
                Electric Jet Car Company
              </h6>

              <div class="bottom">
                <span>27 November, 2020</span>
                <span>7 mins read</span>
              </div>
            </div>
          </div>

          <div class="card-style">
            <div class="card-image">
              <img src={blog1} className="responsive-img" />
            </div>
            <div className="content">
              <div className="para">
                <p>Announcement</p>
              </div>

              <h6>
                Platform Capital Invests in LEO Flight, The World’s First Flying
                Electric Jet Car Company
              </h6>

              <div class="bottom">
                <span>27 November, 2020</span>
                <span>7 mins read</span>
              </div>
            </div>
          </div>

          <div class="card-style">
            <div class="card-image">
              <img src={blog1} className="responsive-img" />
            </div>
            <div className="content">
              <div className="para">
                <p>Announcement</p>
              </div>

              <h6>
                Platform Capital Invests in LEO Flight, The World’s First Flying
                Electric Jet Car Company
              </h6>

              <div class="bottom">
                <span>27 November, 2020</span>
                <span>7 mins read</span>
              </div>
            </div>
          </div>

          <div class="card-style">
            <div class="card-image">
              <img src={blog1} className="responsive-img" />
            </div>
            <div className="content">
              <div className="para">
                <p>Announcement</p>
              </div>

              <h6>
                Platform Capital Invests in LEO Flight, The World’s First Flying
                Electric Jet Car Company
              </h6>

              <div class="bottom">
                <span>27 November, 2020</span>
                <span>7 mins read</span>
              </div>
            </div>
          </div>

          <div class="card-style">
            <div class="card-image">
              <img src={blog1} className="responsive-img" />
            </div>
            <div className="content">
              <div className="para">
                <p>Announcement</p>
              </div>

              <h6>
                Platform Capital Invests in LEO Flight, The World’s First Flying
                Electric Jet Car Company
              </h6>

              <div class="bottom">
                <span>27 November, 2020</span>
                <span>7 mins read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="blog1">
          <div className="buttons">
            <NavLink to="/all" class="  blog-btn">
              Prev
            </NavLink>
            <NavLink to="/latest" class=" blog-btn">
              1
            </NavLink>
            <NavLink to="/popular" class=" blog-btn">
              2
            </NavLink>
            <NavLink to="/announcement" class=" blog-btn">
              3
            </NavLink>
            <NavLink to="/events" class=" blog-btn">
              4
            </NavLink>
            <NavLink to="/investments" class=" blog-btn">
              Next
            </NavLink>
          </div>
        </div>

        <Newsletter />
      </div>
    </AnimatePage>
  );
};

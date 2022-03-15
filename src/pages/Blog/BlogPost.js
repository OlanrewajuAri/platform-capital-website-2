import React from "react";
import { Link } from "react-router-dom";
import "./BlogPost.css";

import blog1 from "../../images/blog1.png";
import { Newsletter } from "../../components/Newsletter/Newsletter";

export const BlogPost = () => {
  return (
    <div className="container">
      <div className="blogPost-header">
        <img src={blog1} className="responsive-img" />
      </div>
      <div className="goup">
        <div className="post-link">
          <Link to="" className="waves-effect waves-light btn">
            Go back
          </Link>
        </div>

        <h2>
          Platform Capital Invests in LEO Flight, The World’s First Flying
          Electric Jet Car Company
        </h2>
        <div class="bottom1">
          <span className="para1">Announcement</span>
          <span>27 November, 2020</span>
          <span>7 mins read</span>
        </div>
      </div>

      <div className="overlay"></div>

      <div className="footer-icons">
        <Link to="">
          <i class="fab fa-linkedin fa-2x foo" style={{ color: "#4fc3f7" }}></i>
        </Link>
        <Link to="">
          <i class="fab fa-twitter fa-2x foo" style={{ color: "#29b6f6" }}></i>
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

      <div className="post-item">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero etiam
          etiam viverra vitae. In odio ut vivamus interdum purus sed facilisi
          consectetur nunc. Odio mi ornare mattis congue netus dis nulla. Urna
          ut vel in congue tellus commodo est justo elit. Nulla sit pellentesque
          aliquam sed rutrum in sed. Aliquet sed facilisi arcu enim senectus leo
          enim, mi. Lacus facilisis sed egestas congue aliquet tristique
          viverra. Et quis lectus lacus sapien, facilisi. Vitae laoreet
          habitasse dui convallis justo, leo molestie etiam. Adipiscing magna
          libero, nec egestas. Arcu turpis semper curabitur lectus venenatis
          viverra iaculis mi. Enim, amet pretium ultricies aliquet. Scelerisque
          lectus nec, turpis nisl gravida egestas. Tempor eget est etiam quis et
          est mattis tellus. Consectetur dictum aliquam, vivamus facilisis
          lectus arcu nisi tortor porttitor. Suscipit sapien elementum enim ut
          adipiscing feugiat porttitor platea. Bibendum lobortis nam duis vitae.
          Vehicula mi, dolor velit, orci habitant pellentesque netus. Pretium
          malesuada viverra sit neque tortor, arcu ultricies vulputate. Nibh
          purus leo viverra amet in sed malesuada nunc adipiscing. Consequat
          urna tincidunt bibendum auctor pharetra sapien et phasellus
          pellentesque. Lorem pretium feugiat nunc quis turpis sodales. Dui,
          tincidunt enim arcu velit a risus, aliquam eget. Sed nibh neque,
          euismod odio quam. Ultricies fermentum, ligula elit id odio enim
          ipsum. Mollis ac dolor velit mauris, ac, sit ut. Quisque consequat id
          mauris elit est sed. Id orci, semper commodo nullam sagittis velit.
          Libero magna sed ut tempus fermentum malesuada nulla lorem turpis. Ut
          volutpat integer nulla viverra. Nibh amet in praesent pretium id quis
          leo. Aliquam enim rhoncus orci leo in.
        </p>
      </div>
      <div className="post-rule">
        <hr className="post-hr" />
      </div>
      <div>
        <div className="comments">
          <h3>Comments</h3>
          <Link to="" class="waves-effect waves-light btn">
            Leave a reply
          </Link>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div className="reply">
          <div className="first-word">
            <h6>LO</h6>
          </div>
          <div className="details">
            <h6>Lionel Okoeguale</h6>
            <p>December 20, 2021; 11:21 am</p>
          </div>
          <div className="Reply">
            <button class="btn">Reply</button>
          </div>
        </div>

        <div className="comments">
          <h6>
            Leo orci dolor, blandit id magna aenean. Tellus interdum lacus
            euismod pharetra, ultrices eget tristique nibh. Orci sed est neque
            ac diam mauris. Eu tempor condimentum sit tincidunt dolor quisque
            pretium quam molestie. Ullamcorper tortor etiam id sed lobortis.
          </h6>
        </div>
        <div className="input-size">
          <div className="inputs">
            <div class="input-field">
              <i class="material-icons prefix" style={{ color: "#6BA6FF" }}>
                comment
              </i>
              <input id="icon_prefix" type="email" />
              <label for="icon_prefix">Comment...</label>
            </div>
            <span>
              <button class="btn btn-large" type="submit">
                Submit
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="post-rule1">
        <hr className="post-hr1" />
      </div>

      {/* stories you may like */}

      <div>
        <div className="stories">
          <h3>Stories you may like</h3>
          <Link to="" class="waves-effect waves-light btn">
            Subscribe to Newsletter
          </Link>
        </div>
      </div>

      {/* blog-link */}

      <div className="main-card1">
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

      <Newsletter />
    </div>
  );
};

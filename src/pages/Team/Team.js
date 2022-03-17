import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "../../components/Image-Grid/Grid";
import "./Team.css";
import M from "materialize-css";

import { Newsletter } from "../../components/Newsletter/Newsletter";

import founder from "../../images/founder.png";
import senior1 from "../../images/senior1.png";
import senior2 from "../../images/senior2.png";
import senior3 from "../../images/senior3.png";
import senior4 from "../../images/senior4.png";
import senior5 from "../../images/senior5.png";
import senior6 from "../../images/senior6.png";
import senior7 from "../../images/senior7.png";
import senior8 from "../../images/senior8.png";
import senior9 from "../../images/senior9.png";
import senior10 from "../../images/senior10.png";
import senior11 from "../../images/senior11.png";
import senior12 from "../../images/senior12.png";
import senior13 from "../../images/senior13.png";
import senior14 from "../../images/senior14.png";
import senior15 from "../../images/senior15.png";
import senior16 from "../../images/senior16.png";

import asso1 from "../../images/asso1.png";
import asso2 from "../../images/asso2.png";
import asso3 from "../../images/asso3.png";
import asso4 from "../../images/asso4.png";
import asso5 from "../../images/asso5.png";
import asso6 from "../../images/asso6.png";

import ana1 from "../../images/ana1.png";
import ana2 from "../../images/ana2.png";
import ana3 from "../../images/ana3.png";
import ana4 from "../../images/ana4.png";
import ana5 from "../../images/ana5.png";
import ana6 from "../../images/ana6.png";
import ana7 from "../../images/ana7.png";
import ana8 from "../../images/ana8.png";
import ana9 from "../../images/ana9.png";
import ana10 from "../../images/ana10.png";
import ana11 from "../../images/ana11.png";
import ana12 from "../../images/ana12.png";
import ana13 from "../../images/ana13.png";
import ana14 from "../../images/ana14.png";
import ana15 from "../../images/ana15.png";
import ana16 from "../../images/ana16.png";
import ana17 from "../../images/ana17.png";
import ana18 from "../../images/ana18.png";
import ana19 from "../../images/ana19.png";
import ana20 from "../../images/ana20.png";
import ana21 from "../../images/ana21.png";
import ana22 from "../../images/ana22.png";
import ana23 from "../../images/ana23.png";
import ana24 from "../../images/ana24.png";
import ana25 from "../../images/ana25.png";
import ana26 from "../../images/ana26.png";
import ana27 from "../../images/ana27.png";
import ana28 from "../../images/ana28.png";
import ana29 from "../../images/ana29.png";
import ana30 from "../../images/ana30.png";
import ana31 from "../../images/ana31.png";
import ana32 from "../../images/ana32.png";
import ana33 from "../../images/ana33.png";
import { useDocumentTitle } from "../../components/TitleChange/TitleChange";
import { AnimatePage } from "../../components/Animate/AnimatePage";

export const Team = () => {
  useDocumentTitle("Platform | Team");
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);

  return (
    <AnimatePage>
      <div className="container">
        <div className="D-grid">
          <div className="section1-team">
            <h3>Meet the minds changing the African narrative</h3>
            <h6>
              We are a high skilled family that is obsessed about changing the
              African narrative, value creation and sustainable development
              accross our continent.
            </h6>
            <div className="link">
              <Link to="" class="btn">
                Learn more about us
              </Link>
            </div>
          </div>
          <div className="grid-pic">
            <Grid />
          </div>
        </div>
        {/* founder */}

        <div className="roots">
          <div className="main-values-team">
            <div className="woman-team1">
              <img src={founder} alt="image" className="responsive-img" />
            </div>
            <div className="values-team">
              <h6>Meet the Founder and CEO</h6>
              <h2>Dr. Akintoye Akindele</h2>
              <p>
                We are a team of passionate and experienced professionals from
                diverse backgrounds collectively harnessing our expertise to
                enhance the companies we advise and invest in. Everyone at
                Platform Capital has a job – to make our investee businesses,
                clients and partners successful and achieve their goals. We are
                driven to exceed the expectations of our stakeholders.
              </p>
              <button data-target="modal2" class="btn modal-trigger">
                <i class="fa fa-play-circle-o" aria-hidden="true"></i>
                See Introductory Video
              </button>

              <div id="modal2" class="modal">
                <div class="modal-content">
                  <video
                    height="auto"
                    width="100%"
                    controls
                    preload="auto"
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
              </div>
            </div>
          </div>
        </div>

        {/* senior management team */}
        <div className="senior-team">
          <h1>Our Senior management team</h1>
          <p>
            We put together a 23-person senior management team with over 340+
            years of combined investment experience (Private Equity, Venture
            Capital, Investment Banking, Finance, Investor Relations,
            Operations) across multiple markets.
          </p>
        </div>

        <div className="senior-pic">
          <div className="pics">
            <img src={senior1} />
            <h6>Dolapo Ogunmekan</h6>
            <p>Managing Director</p>
          </div>
          <div className="pics">
            <img src={senior2} />
            <h6>Ponmile Osibo</h6>
            <p>Partner</p>
          </div>
          <div className="pics">
            <img src={senior3} />
            <h6>Solabomi Adedeji</h6>
            <p>Partner</p>
          </div>
          <div className="pics">
            <img src={senior4} />
            <h6>Dr. Benedicta Oyiana</h6>
            <p>Partner</p>
          </div>
          <div className="pics">
            <img src={senior5} />
            <h6>Olubunmi Odunowo</h6>
            <p>Partner</p>
          </div>
          <div className="pics">
            <img src={senior6} />
            <h6>Dolapo Ogunmekan</h6>
            <p>Managing Director</p>
          </div>
          <div className="pics">
            <img src={senior7} />
            <h6>Dolapo Ogunmekan</h6>
            <p>Managing Director</p>
          </div>
          <div className="pics">
            <img src={senior8} />
            <h6>Dolapo Ogunmekan</h6>
            <p>Managing Director</p>
          </div>
          <div className="pics">
            <img src={senior9} />
            <h6>Adenike Okebu</h6>
            <p>Head, Audit & Compliance</p>
          </div>
          <div className="pics">
            <img src={senior10} />
            <h6>Toyin Ogunbajo</h6>
            <p>HR Manager</p>
          </div>
          <div className="pics">
            <img src={senior11} />
            <h6>Adeniyi Olowoniyi</h6>
            <p>Chief Information Officer</p>
          </div>
          <div className="pics">
            <img src={senior12} />
            <h6>Chukwudalu Akabogu</h6>
            <p>Senior Vice President</p>
          </div>
          <div className="pics">
            <img src={senior13} />
            <h6>Akintoyesse Ibironke</h6>
            <p>Head Finance</p>
          </div>
          <div className="pics">
            <img src={senior14} />
            <h6>Bowofade Elegbede</h6>
            <p>Vice President</p>
          </div>
          <div className="pics">
            <img src={senior15} />
            <h6>Adesola Adesugba</h6>
            <p>Head, Communication & Brand</p>
          </div>
          <div className="pics">
            <img src={senior16} />
            <h6>Chukwudubem Okafor</h6>
            <p>Head of IT</p>
          </div>
        </div>

        {/* associates */}

        <div className="associates">
          <h1>Associates</h1>
        </div>
        <div className="senior-pic">
          <div className="pics">
            <img src={asso1} />
            <h6>Suen Oladimeji</h6>
            <p>Associate, Portfoli Support</p>
          </div>
          <div className="pics">
            <img src={asso2} />
            <h6>Full Name</h6>
            <p>Associate, Brand Capital</p>
          </div>
          <div className="pics">
            <img src={asso3} />
            <h6>Ebunoluwa Surname</h6>
            <p>Associate</p>
          </div>
          <div className="pics">
            <img src={asso4} />
            <h6>Olatunde King</h6>
            <p>Legal</p>
          </div>
          <div className="pics">
            <img src={asso5} />
            <h6>Damilola Obidairo </h6>
            <p>Program Manager</p>
          </div>
          <div className="pics">
            <img src={asso6} />
            <h6>Zainab Idumah</h6>
            <p>Associate</p>
          </div>
        </div>

        {/* analysts */}

        <div className="associates">
          <h1>Analysts</h1>
        </div>
        <div className="senior-pic">
          <div className="pics">
            <img src={ana1} />
            <h6>Enare Agbor</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana2} />
            <h6>Joshua Ojewunmi</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana3} />
            <h6>Olumide Bankole</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana4} />
            <h6>Ademidun Akindele</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana5} />
            <h6>Modupe Akinyemi </h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana6} />
            <h6>Mobolade A</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana7} />
            <h6>Omotayo Ademuwagun</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana8} />
            <h6>Oluwatobi Balogun</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana9} />
            <h6>Joshua Adeyemo</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana10} />
            <h6>Suilaman Surname </h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana11} />
            <h6>Titilayo Dahnusi</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana12} />
            <h6>Tamilore Akapo</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana13} />
            <h6>Adetutu Adeite</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana14} />
            <h6>Alex Tega</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana15} />
            <h6>Oyebanmiji Ojetimi</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana16} />
            <h6>Martha Ayika</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana17} />
            <h6>John Akinyemi</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana18} />
            <h6>Taiwo Shobande</h6>
            <p>Designation</p>
          </div>
          <div className="pics">
            <img src={ana19} />
            <h6>Lionel Okoeguale</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana20} />
            <h6>Tobiloba Adewunmi</h6>
            <p>Designation</p>
          </div>
          <div className="pics">
            <img src={ana21} />
            <h6>Motunrayo Dasilva</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana22} />
            <h6>Olamide Surname</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana23} />
            <h6>Aisha Surname</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana24} />
            <h6>Obianuju Surname</h6>
            <p>Designation</p>
          </div>
          <div className="pics">
            <img src={ana25} />
            <h6>Opeyemi Oyewole</h6>
            <p>Designation</p>
          </div>
          <div className="pics">
            <img src={ana26} />
            <h6>Nadia Ebong</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana27} />
            <h6>Ifeoma Obi</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana28} />
            <h6>Kunle Akinola</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana29} />
            <h6>Emeka Chukwurah</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana30} />
            <h6>Jennifer Omoruyi</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana31} />
            <h6>Mabel Omogiate</h6>
            <p>Executive Assitant </p>
          </div>
          <div className="pics">
            <img src={ana32} />
            <h6>Teniola Odekunle</h6>
            <p>Analyst</p>
          </div>
          <div className="pics">
            <img src={ana33} />
            <h6>Oluchi Amamchukwu</h6>
            <p>Analyst</p>
          </div>
        </div>

        <Newsletter />
      </div>
    </AnimatePage>
  );
};

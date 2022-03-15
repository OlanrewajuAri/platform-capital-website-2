import React, { useEffect } from 'react'
import './OurMission.css'
import AOS from 'aos'

export const OurMission = () => {
  useEffect(() => {
   AOS.init({
     duration:1000
   })
  }, [])
  
  return (
    <div>
      <div className="our-footprint-about" data-aos='fade-up'>
        <div>
          <h6 className="footprint-about">OUR MISSION</h6>
          <h3 className="passionate-about">
            We are passionate about changing the african narrative
          </h3>
        </div>
      </div>

      {/* largest vc in africa */}

      <div className="mission-bottom">
        <div className="award3">
          <div className="award3-icons">
            <i class="fas fa-dharmachakra fa-2x award3-icon"></i>
          </div>
          <div className="BIF">
            <h6>Largest VC in Africa</h6>
            <p>
              To buid the leading growth market focused, invested & Advisory
              firm.
            </p>
          </div>
        </div>

        <div className="award3">
          <div className="award3-icons">
            <i class="fas fa-dharmachakra fa-2x award3-icon"></i>
          </div>
          <div className="BIF">
            <h6>Change the African narrative</h6>
            <p>
              Vulputate venenatis nisi consequat at. Malesuada bibendum tellus
              amet.
            </p>
          </div>
        </div>

        <div className="award3">
          <div className="award3-icons">
            <i class="fas fa-dharmachakra fa-2x award3-icon"></i>
          </div>
          <div className="BIF">
            <h6>Our goals</h6>
            <p>
              Vulputate venenatis nisi consequat at. Malesuada bibendum tellus
              amet.
            </p>
          </div>
        </div>

        <div className="award3">
          <div className="award3-icons">
            <i class="fas fa-dharmachakra fa-2x award3-icon"></i>
          </div>
          <div className="BIF">
            <h6>Largest VC in Africa</h6>
            <p>
              To buid the leading growth market focused, invested & Advisory
              firm.
            </p>
          </div>
        </div>

        <div className="award3">
          <div className="award3-icons">
            <i class="fas fa-dharmachakra fa-2x award3-icon"></i>
          </div>
          <div className="BIF">
            <h6>Change the African narrative</h6>
            <p>
              Vulputate venenatis nisi consequat at. Malesuada bibendum tellus
              amet.
            </p>
          </div>
        </div>

        <div className="award3">
          <div className="award3-icons">
            <i class="fas fa-dharmachakra fa-2x award3-icon"></i>
          </div>
          <div className="BIF">
            <h6>Our goals</h6>
            <p>
              Vulputate venenatis nisi consequat at. Malesuada bibendum tellus
              amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import './Portfolio1.css'

export const Portfolio1 = () => {
  return (
    <div>
      <div className="porfolio-company">
        <h2>Our portfolio</h2>
        <p>We are passionate about changing the african narrative</p>
      </div>

      <div className="main-direct">
        <div className="direct">
          <h1>123+</h1>
          <h6>Companies (Direct + Indirect)</h6>
        </div>
        <div className="direct1">
          <h1>3</h1>
          <h6>Continents on a global scale</h6>
        </div>
      </div>

      <div className="main-direct2">
        <div className="direct2">
          <h1>15</h1>
          <h6>Countries we opperate</h6>
        </div>
        <div className="direct3">
          <h1>3,000</h1>
          <h6>Employees accross out portfolio (Direct + Indirect)</h6>
        </div>
      </div>

      <div className="main-direct4">
        <div className="direct4">
          <h1>$1bn+</h1>
          <h6>Portfolio valuation </h6>
        </div>
        <div className="direct5">
          <h1>9</h1>
          <h6>Sectors of operation</h6>
        </div>
      </div>
    </div>
  );
}

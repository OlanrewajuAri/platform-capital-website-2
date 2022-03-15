import React from "react";
import grid1 from "../../images/grid1.png";
import grid2 from "../../images/grid2.png";
import grid3 from "../../images/grid3.png";
import grid4 from "../../images/grid4.png";
import grid5 from "../../images/grid5.png";
import grid6 from "../../images/grid6.png";
import grid7 from "../../images/grid7.png";

import "./Grid.css";

export const Grid = () => {
  return (
    <div className="gallery">
      <div>
        <img src={grid1} className="responsive-img" />
      </div>
      <div className="v-stretched">
        <img src={grid2} className="responsive-img" />
      </div>
      <div className="big-stretch">
        <img src={grid3} className="responsive-img" />
      </div>
      <div>
        <img src={grid4} className="responsive-img" />
      </div>
      <div>
        <img src={grid5} className="responsive-img" />
      </div>
      <div>
        <img src={grid6} className="responsive-img" />
      </div>
      <div className="h-stretched">
        <img src={grid7} className="responsive-img" />
      </div>
    </div>
  );
};

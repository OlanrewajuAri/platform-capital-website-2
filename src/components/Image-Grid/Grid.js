import React from "react";
// import grid1 from "../../images/grid1.png";
// import grid2 from "../../images/grid2.png";
// import grid3 from "../../images/grid3.png";
// import grid4 from "../../images/grid4.png";
// import grid5 from "../../images/grid5.png";
// import grid6 from "../../images/grid6.png";
import group from "../../images/group.png";

import "./Grid.css";

export const Grid = () => {
  return (
    <div className="gallery">
      <img src={group} className="responsive-img" />
    </div>
  );
};

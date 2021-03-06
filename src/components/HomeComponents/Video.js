import React from "react";
import "./Video.css";

export const Video = () => {
  return (
    <div className="video">
      <video
        width="100%"
        height="30%"
        controls
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
  );
};

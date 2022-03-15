import React from "react";
import BackToTop from "react-back-to-top-button";

export const Gototop = () => {
  return (
    <div>
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <button
          class="btn-floating btn-large "
          style={{ background: "#1f2a3e" }}
        >
          <i class="large material-icons">arrow_upward</i>
        </button>
      </BackToTop>
    </div>
  );
};

import React from "react";
import mainLogo from "./images/1.png";
export const Content1 = () => {
  return (
    <div className="full">
      <div className="firstText">
        <p>Available in select states</p>
        <h1>
          A pet-first <label className="orange">approach to</label> wellness
        </h1>
        <button className="learnmore">Learn More</button>
      </div>

      <div className="imageOfDog">
        {" "}
        <img className="dogimage" src={mainLogo} />
      </div>
    </div>
  );
};

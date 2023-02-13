import React from "react";
import mixSpices from "../../../src/assets/mixspices.png";
import "./handpicked.css";

const HandPicked = () => {
  return (
    <div className="mix-spices flex flex-col items-center justify-center relative">
      <div className="mix-spices-img">
        <img src={mixSpices} alt="" />
      </div>
      <div className="handpicked absolute top-[40%] bg-center bg-cover">
        <div className="para-container mt-20 lg:ml-10">
          <p className="hand-para">
            Spices that are grown organically and handpicked for uncompromised
            taste.
          </p>
          <p className="hand-desc lg:w-[80%] mt-8">
            PlanetsEra spices give you unmatched taste and tempting aroma. Get
            your desired flavor of spices blessed with the benefits of Nature
            and heavenly delicacy.
          </p>
          <div className="btn-container">
          <button className="hand-btn border border-red-500 rounded-full text-white mt-7">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandPicked;

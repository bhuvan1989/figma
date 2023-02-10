import React from "react";
import mixSpices from "../../../src/assets/mixspices.png";
import "./handpicked.css";

const HandPicked = () => {
  return (
    <div className="mix-spices flex flex-col items-center justify-center w-[100%] h-[140vh] relative">
      <div className="mix-spices-img">
        <img src={mixSpices} alt="" width={"856px"} height={"738px"} />
      </div>
      <div className="handpicked w-[100%] h-[558px] absolute top-[40%] bg-center bg-cover">
        <div className="w-[60%] mt-20 ml-10">
          <p className="hand-para">
            Spices that are grown organically and handpicked for uncompromised
            taste.
          </p>
          <p className="hand-desc w-[80%] mt-8">
            PlanetsEra spices give you unmatched taste and tempting aroma. Get
            your desired flavor of spices blessed with the benefits of Nature
            and heavenly delicacy.
          </p>
          <button className="hand-btn border border-red-500 rounded-full text-white mt-7 w-[196px] h-[60px] py-4">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HandPicked;

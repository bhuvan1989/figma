import React from "react";
import "./SpicesandHealth.css";
import Spices3 from "../../../src/assets/spices3.png";

import HealthySpices from "./HealthySpices";
import Spice4 from "../../../src/assets/spicws4.jpeg";
const SpiceandHealth = () => {
  return (
    <div className="spicesandHealth relative">
      <h1 className="heading text-center space-x-1">Spices and Health</h1>

      <div className="flex justify-between">
        <div className="w-[47%] mt-5">
          <HealthySpices />
        </div>
        <div>
          <div className="items-left basis-1/12">
            <div className="bar w-[23px] h-[466px] relative top-20 ml-10">
              <div className="scroll-bar"></div>
            </div>
          </div>
        </div>
        <div className="p-12 w-[47%]">
          <img
            src={Spice4}
            style={{ width: "641px", height: "510px" }}
            alt=""
          />
        </div>
      </div>
      {/* <div className="overflow-x-hidden">
        <img
          src={Spices3}
          className="w-[473px] h-[445px] absolute z-30 spices3 top-[60%]"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default SpiceandHealth;

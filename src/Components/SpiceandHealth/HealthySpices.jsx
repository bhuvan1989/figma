import React from "react";

const HealthySpices = () => {
  return (
    <div className="p-12">
      <div className=" flex justify-between mt-10">
        <div className="w-[125px] h-[125px] border-4 border-dashed border-red-500 flex justify-center items-center rounded-full">
          <div className="black-pepper p-10"></div>
        </div>
        <div className="w-96">
          <p className="cardamom-head">Black Pepper</p>
          <p className="cardamom-para mt-2">
            Peppercorns are used as whole or ground and added to dishes or
            fries. It gives food a distinctive aroma and flavor along with its
            piquant heat. It is definitely the ‘King of Spices’ and the most
            loved spices of all.
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-20">
        <div className="w-[125px] h-[125px] border-4 border-dashed border-red-500 flex justify-center items-center rounded-full">
          <div className="cardamom p-10"></div>
        </div>
        <div className="w-96">
          <p className="cardamom-head">Cardamom</p>
          <p className="cardamom-para mt-2">
            Cardamom, the ‘Queen of Spices, is a much loved spice for its flavor
            and unique taste. It is intensely fragrant and aromatic and is an
            indispensible ingredient in biriyani and pulao
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthySpices;
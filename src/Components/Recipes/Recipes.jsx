import React, { useState } from "react";
import { RecipeData } from "../RecipeData";
import "./recipes.css";

import VideoCard1 from "./VideoCard1";



const Recipes = () => {
   
    

  return (
    <div className="recipes lg:w-[95%] mx-auto mt-5">
      <div className="flex justify-center">
        <h1 className="heading">Check out the yummiest recipes </h1>
      </div>
      <div className="video-cards flex w-[100%] justify-around mx-auto mt-10 items-center">
        {/* <VideoCard1/>
        <VideoCard2/>
        <VideoCard3/>   */}
        {
          RecipeData.map((item)=>{
            return(
                <VideoCard1 item={item}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default Recipes;

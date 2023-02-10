import React from "react";
import Cards from "./Cards";
import Cards2 from "./Cards2";
import "./newsandblog.css";
import NewsInfo from "./NewsInfo";
import Spoon from "../../../src/assets/spoon.png";
import transbg from "../../../src/assets/transbg.png";
import { NewsData } from "./Newsdata";

const newsCards = NewsData.map((item) => {
  return (
    <div className="">
      <Cards item={item} />
    </div>
  );
});
const NewsandBlog = () => {
  return (
    <div className="newsandblog w-[100%] h-[180vh] mx-auto relative mt-60">
      <img
        src={Spoon}
        alt=""
        className="absolute top-[-18%] left-[-14%] w-[530px]"
      />
      <div className="-z-30 absolute right-0 top-[-30%] flex justify-end opacity-[20%]">
        <img src={transbg} alt="" />
      </div>
      <NewsInfo />
      <div className="flex w-[95%] justify-around flex-wrap mt-20 mx-auto">{newsCards}</div>

      {/* <Cards2 /> */}
    </div>
  );
};

export default NewsandBlog;

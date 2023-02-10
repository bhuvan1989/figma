import React from "react";
import "./review.css";
import ReviewImg from "./ReviewImg";

import ReviewInfo from "./ReviewInfo";

const Review = () => {
  return (
    <div className="review-container relative justify-between flex w-[95%] h-[100vh] mx-auto mt-10 overflow-x-hidden overflow-y-hidden">
      <ReviewInfo />
      <ReviewImg/>
    </div>
  );
};

export default Review;

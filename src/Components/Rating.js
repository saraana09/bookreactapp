import React from "react";
import ReactStars from "react-stars";

const Rating = () => {
  return (
    <div>
      <ReactStars
        activeColor="gold"
        size={30}
        count={5}
        isHalf={true}
        // onChange={ratingChange}
      />
    </div>
  );
};

export default Rating;

import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {
  return (
    <div>
      <h1>Reviews: </h1>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}

export default Reviews;

import React from "react";
import Review from "./Review";

function Reviews({ reviews, isLoading }) {
  return (
    <div>
      <h1>Reviews: </h1>
      {isLoading ? <p>Loading...</p> : null}
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}

export default Reviews;

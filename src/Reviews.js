import React, { useEffect } from "react";
import Review from "./Review";

function Reviews({ reviews, isLoading }) {
  useEffect(() => {
    console.log("Reviews", reviews);
  }, [reviews]);
  return (
    <div>
      <h1>Reviews: </h1>
      {isLoading ? <p>Loading...</p> : null}
      <ol>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
      </ol>
    </div>
  );
}

export default Reviews;

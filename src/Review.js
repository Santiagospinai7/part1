import React from "react";

function Review({ review }) {
  return (
    <div>
      <h3>{review.title}</h3>
      <p>{review.body}</p>
      <br />
    </div>
  );
}

export default Review;

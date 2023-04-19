import React from "react";

function Review({ review }) {
  return (
    <div>
      <li>
        <h3>{review.title}</h3>
        <p>{review.body}</p>
      </li>
      <br />
    </div>
  );
}

export default Review;

import React from "react";

function Review({ review }) {
  return (
    <div>
      <li>
        <p>title: {review.title}</p>
        <p>content: {review.content}</p>
        <p>important: {(review.important) ? 'true' : 'false'}</p>
      </li>
      <br />
    </div>
  );
}

export default Review;

import React from "react";

function Part(props) {
  return (
    <div>
      <p>{`${props.part.name} has ${props.part.exercises} exercises`}</p>
    </div>
  );
}

export default Part;

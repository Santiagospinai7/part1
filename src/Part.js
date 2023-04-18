import React from "react";

function Part( {part} ) {
  return (
    <div>
      <li>{`${part.name} has ${part.exercises} exercises`}</li>
    </div>
  );
}

export default Part;

import React from "react"
import Part from "./Part"

function Content( {parts} ) {
  return (
    <div>
      <ol>
      {
        parts.map(part => {
          return <Part key={part.id} part={part}/>
        }
      )}
      </ol>
    </div>
  )
}

export default Content

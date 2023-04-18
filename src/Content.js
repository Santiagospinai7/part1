import React from "react"
import Part from "./Part"

function Content(props) {
  return (
    <div>
      {
        props.parts.map(part => {
          return <Part key={part.id} part={part}/>
        }
      )}
    </div>
  )
}

export default Content

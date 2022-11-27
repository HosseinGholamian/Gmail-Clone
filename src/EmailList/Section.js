
import React from 'react'
import "./section.css"

function Section(props) {
    console.log(props)

    var sectionStyle = {
        borderBottom : `1px solid ${props.color}` ,
        color: props.selected && props.color
    }
  return (
    <div className={`section ${props.selected && 'section__selected' }`} style={sectionStyle}>
        <props.Icon />
        <h4>{props.title}</h4>
    </div>
  )
}

export default Section
import React from 'react'
import './SidebarOption.css'

function SidebarOption(props) {
    return (
        <div className={`sidebarOption ${props.selected && 'sidebarOption__active'}`}>
            <props.icon />
            <h3>{props.title}</h3>
            <p>{props.number}</p>
        </div>  
    )
}

export default SidebarOption
import React from 'react'
import "./Sider.css"

function Sider(props) {
    return (

        <div className="sider">
            <figure>
                <img src={props.src} alt={props.alt} />
                <figcaption id="title">{props.title}</figcaption>
                <figcaption id="subtitle">{props.subtitle}</figcaption>
            </figure>
            <hr />
            <div id="spans">{props.tags}</div>
            <hr />  
            <div id="icons">{props.icons}</div>
        </div>

    )
}

export default Sider;

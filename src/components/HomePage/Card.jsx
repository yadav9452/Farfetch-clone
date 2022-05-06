

import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            {/* <h2> {props.title}</h2> */}
        </div>
    )
}
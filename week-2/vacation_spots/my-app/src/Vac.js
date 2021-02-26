import React from "react"

function Vac(props){
    return (
        <div>
            <h2>{props.place}</h2>
            <h3>{props.price}</h3>
            <h3>{props.time}</h3>
        <hr/>
    </div>
    )
}

export default Vac
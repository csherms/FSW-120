import React from "react";
import './styles.css';

function Vac(props){
    return (
        <div>
            <h1>{props.place}</h1>
            <h2>{props.price}</h2>
            <h2>{props.time}</h2>
        <hr/>
    </div>
    )
}

export default Vac
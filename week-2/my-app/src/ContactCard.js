import React from "react"

function ContactCard(props) {
    return (
        <div style={{backgroundColor: "lightGray", textAlign: "center",
        padding: 10, margin: 24, marginLeft: 500, marginRight: 500}}>

            <h3 style={{color: "blue"}}>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>

        </div>
    )
}

export default ContactCard
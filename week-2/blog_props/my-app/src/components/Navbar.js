import React from 'react';
import '../styles.css'




function Navbar(){
    return(
        <div>
            <ul className="navbar-container">
                <li className="nav-links">Home</li>
                <li className="nav-links">About</li>
                <li className="nav-links">Sample Post</li>
                <li className="nav-links">Contact</li>
            </ul>
            
        </div>
    )
}

export default Navbar;
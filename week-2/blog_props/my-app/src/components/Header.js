import React from 'react';
import Navbar from './Navbar'
import '../styles.css'




function Header(){
    return(
        <div className="header-container">
        <Navbar />
        <h1 className="header-one">Clean Blog</h1>
        <h4 className="header-two">A blog theme by Start Bootstrap</h4>
        </div>
    )
}

export default Header;
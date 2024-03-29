import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

export default function Nav() {

    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <ul className="nav-links">

                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>

                    <Link style={navStyle} to="/about">
                        <li>About</li>
                    </Link>

                <Link style={navStyle} to="/services">
                    <li>Services</li>
                </Link>

            </ul>
        </nav>
    )
}

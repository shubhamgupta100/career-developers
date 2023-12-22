import React from 'react';
import Logo from "../assets/image/logo.png"
const Navbar = () => {
    return ( <React.Fragment>
        <nav id="header">
            <div className="nav-wrapper">
                <a href="/">
                    <img src={Logo} alt="logo"/>
                </a>
                <button id="submenu" onclick="showMenu(event)">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className="nav-items">
                    <li>
                        <a href="#teamSection">Home</a>
                    </li>
                    <li>
                        <a href="#aboutSection">Courses</a>
                    </li>
                    <li>
                        <a href="#colaborate">Faculty</a>
                    </li>
                    <li>
                        <a href="#colaborate">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    </React.Fragment>

    )
}
export default Navbar;
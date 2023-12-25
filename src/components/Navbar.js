import React from 'react';
import Logo from "../assets/image/logo.png"
const Navbar = () => {
    const showMenu = (event) => {
        event.preventDefault();
        let element = document.getElementById('header');
        if (element.classList.contains('active')) {
            element.className = "";
        } else {
            element.className = "active";
        }
    }
    return (<React.Fragment>
        <nav id="header">
            <div className="nav-wrapper">
                <a href="/">
                    <img src={Logo} alt="logo" />
                </a>
                <button id="submenu" onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className="nav-items">
                    <li>
                        <a href="#instroSection">Home</a>
                    </li>
                    <li>
                        <a href='#galleries'>Photo Gallery</a>
                    </li>
                    <li>
                        <a href="#courseSection">Courses</a>
                    </li>
                    <li>
                        <a href="#teachers">Faculty</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>

                </ul>
            </div>
        </nav>
    </React.Fragment>

    )
}
export default Navbar;
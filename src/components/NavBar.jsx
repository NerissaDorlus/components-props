import React from "react";
import "../styles/navbar.css"

//react components start with uppercase
function NavBar(){
    // something
    return(
        <nav className="navbar">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Account</li>
            </ul>
        </nav>
    )
}



export default NavBar;
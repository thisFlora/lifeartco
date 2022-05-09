import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
     return (
          <nav className="navbar">
               <a href="www.google.com" className="logo">LOGO</a>
               <input type="checkbox" id="toggler"/>
               <label for="toggler"><FontAwesomeIcon icon={faAlignJustify} /></label>
               <div className="menu">
               <ul className="list">
                    <li>
                         <a href="www.google.com" className="nav-link">
                              Home
                         </a>
                    </li>
                    <li>
                         <a href="www.google.com" className="nav-link">
                              About us
                         </a>
                    </li>
                    <li>
                         <a href="www.google.com" className="nav-link">
                              What we do
                         </a>
                    </li>
                    <li>
                         <a href="www.google.com" className="nav-link">
                              Contact us
                         </a>
                    </li>
               </ul>
               </div>
          </nav>
     );
}

export default NavBar
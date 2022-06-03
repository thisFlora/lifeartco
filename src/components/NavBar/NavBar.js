import { React } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";


function NavBar() {
     return (
          <>
          <header>
          <nav className="navbar">
               <NavLink to="/" className="nav">
                    <img alt="logo" src={logo} className="nav-logo"></img>
               </NavLink>
               <input type="checkbox" id="toggler"/>
               <label htmlFor="toggler"><FontAwesomeIcon icon={faAlignJustify} /></label>
               <div className="menu">
               <ul className="list">
                    <li>
                         <NavLink to="/" className="nav-link">
                              Home
                         </NavLink>
                    </li>
                    <li>
                         <NavLink to="/" className="nav-link">
                              About us
                         </NavLink>
                    </li>
                    <li>
                         <NavLink to="/" className="nav-link">
                              What we do
                         </NavLink>
                    </li>
                    <li>
                         <NavLink to="/" className="nav-link">
                              Contact us
                         </NavLink>
                    </li>
               </ul>
               </div>
          </nav>
          </header>
          </>

     );
}

export default NavBar
import React from "react";
import { Link } from "react-router-dom";


function NavBar(){
    return(
        <div>
          <nav className="navbar">
            <div className="brand-title">SPIT-A-RHYME</div>
            <div className="navbar-links">
                 <ul>
                     <li>
                         <Link to="/" className="nav-link">HOME</Link>
                     </li>
                     <li>
                         <Link to="/poems" className="nav-link">POEMS</Link>
                     </li>
                     <li>
                         <Link to="/popular" className="nav-link">POPULAR</Link>
                     </li>
                     <li>
                         <Link to="/authors" className="nav-link">AUTHORS</Link>
                     </li>
                     <li>
                         <Link to="/contactUs" className="nav-link">CONTACTS</Link>
                     </li>

                 </ul>
            </div>
          </nav>  
        </div>
    )

}

export default NavBar;
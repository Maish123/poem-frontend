import React from "react";
import { Link } from "react-router-dom";


function NavBar(){
    return(
        <div>
          <nav>
            <div>
                 <ul>
                     <li>
                         <Link to="/" className="nav-link">HOME</Link>
                     </li>
                     <li>
                         <Link to="/categories" className="nav-link">CATEGORIES</Link>
                     </li>
                     <li>
                         <Link to="/authors" className="nav-link">AUTHORS</Link>
                     </li>
                     <li>
                         <Link to="/addpoem" className="nav-link">ADD POEM</Link>
                     </li>
                 </ul>
            </div>
          </nav>  
        </div>
    )

}

export default NavBar;
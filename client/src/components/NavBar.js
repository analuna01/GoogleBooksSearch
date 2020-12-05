import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div>
        <nav>
        <ul className="nav-links">
            <Link to ="/">
                <li>Home</li>
            </Link>
            <Link to ="/save">
                <li>Saved Books</li>
            </Link>
        </ul>
        </nav>
      
    </div>
  );
}

export default NavBar;
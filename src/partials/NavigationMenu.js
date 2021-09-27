import React from "react";
import {Link} from "react-router-dom";
function NavigationMenu() {

    return(
        <nav>
            <div>
                <Link to="/">
                    <img class="Logo" alt="Logo"/>
                </Link>
            </div>
            <div class="nav-items">
                <Link class="nav-item" to="/">Home</Link>
                <Link class="nav-item" to="/projects">Projects</Link>
            </div>
        </nav>
    );

}


export default NavigationMenu;
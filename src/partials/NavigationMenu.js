import React from "react";
import {Link} from "react-router-dom";
function NavigationMenu() {

    return(
        <nav>
            <div className="nav-content">
                <div className="nav-logo">
                    <Link to="/">
                        {/* <img className="Logo" alt="Logo"/> */}
                        <h1>RU</h1>
                    </Link>
                </div>
                <div className="nav-items">
                    <Link className="nav-item" to="/">Home</Link>
                    <Link className="nav-item" to="/projects">Projects</Link>
                </div>
            </div>
        </nav>
    );

}


export default NavigationMenu;
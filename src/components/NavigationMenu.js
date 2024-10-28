import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
function NavigationMenu({onHomePage}) {
    const [pageTopOffset, setPageTopOffset] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setPageTopOffset(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return(
        <nav className={onHomePage && !pageTopOffset ? "over-hero" : ""}>
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
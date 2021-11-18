import React from "react";
import '../styles/home.css';
function Home() {

    return(
        <>
        <div className="section gradient hero">
            <div className="container">
                <h1>Ryan Unroe</h1>
                <h2 className="uppercase">Web Design and Development Student</h2>
                <div className="socials-container">
                    <a className="social-icon linkedin" href="https://www.linkedin.com/in/ryanunroe/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="social-icon github" href="https://github.com/RUnroe/" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="social-icon gmail" href="mailto:ryanunroe@gmail.com" target="_blank">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>

                <div className="hexagon">
                    <div className="hexagon-in1">
                        <div className="hex-image"></div>
                    </div>
                </div>
            </div>

        </div>
        <div className="section light-2 home-content">
            <div className="about-me">
                <div className="container">
                    <h3>About Me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
        </>
    )

}


export default Home;
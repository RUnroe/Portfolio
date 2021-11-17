import React from "react";
import '../styles/home.css';
function Home() {

    return(
        <div className="section gradient hero">
            <div className="container">
                <h1>Ryan Unroe</h1>
                <h2 className="uppercase">Web Design and Development Student</h2>
                <div className="socials-container">
                    <a className="social-icon linkedin" href="https://www.linkedin.com/in/ryanunroe/" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a className="social-icon github" href="https://github.com/RUnroe/" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                    <a className="social-icon gmail" href="mailto:ryanunroe@gmail.com" target="_blank">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>

        </div>
    )

}


export default Home;
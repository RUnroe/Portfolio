import React, { useEffect } from "react";
import '../styles/home.css';
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
        AOS.init({
            offset: 120,
            duration: 300,
            easing: 'ease-in-sine',
          });
        AOS.refresh();
      }, []);
    return(
        <>
        <div className="section gradient hero">
            <div className="container">
                <div>
                    <h1>Ryan Unroe</h1>
                    <h2 className="uppercase">Web Design and Development</h2>
                </div>
                <div className="socials-container">
                    <div className="social-icon-wrapper" data-aos="zoom-in" data-aos-duration="200">
                    <a className="social-icon linkedin" href="https://www.linkedin.com/in/ryanunroe/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </div>
                    <div className="social-icon-wrapper" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="50">
                    <a className="social-icon github" href="https://github.com/RUnroe/" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    </div>
                    <div className="social-icon-wrapper" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="100">
                    <a className="social-icon gmail" href="mailto:ryanunroe@gmail.com" target="_blank" rel="noreferrer">
                        <i className="fas fa-envelope"></i>
                    </a>
                    </div>
                </div>

                <div className="hexagon">
                    <div className="hexagon-in1">
                        <div className="hex-image" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="300"></div>
                    </div>
                </div>
            </div>

        </div>
        <div className="light-2 home-content">
            <div className="section about-me">
                <div className="container">
                    <h3>About Me</h3>
                    <p>
                        I am currently working for the State of Utah developing and designing webpages in React. 
                        In September of 2022, I graduated from <a href="https://www.neumont.edu/" target="_blank" rel="noreferrer">Neumont College of Computer Science</a> as Valedictorian with a degree in Web Design and Development. <br />
                        Growing up, I had a lot of interest in engineering. Throughout high school, I participated 
                        in my schools <a href="https://www.pltw.org/our-programs/pltw-engineering" target="_blank" rel="noreferrer"> PLTW engineering</a> courses. These courses helped expose me to the different 
                        types of engineering and eventually introduced me to computer science, which I took quite a
                        liking to. I took additional coding courses through the rest of high school and then moved
                        to Salt Lake City, UT to attend Neumont College. Here, I found that web is my passion, 
                        and that both the development and the design side spark my interest.  
                    </p>
                </div>
            </div>

            <div className="skills">
                <div className="slanted-bg"></div>
                <div className="container ex">
                    <div className="left">
                        <h3>Skills</h3>
                        <p>
                            Throughout my high school PLTW engineering courses, I was fortunate to learn about CAD,
                            mechanisms, automation, logic and computational thinking, digital electronics, and a product
                            development process. High school also helped me learn HTML, CSS, JS, Java, PHP, and SQL. 
                        </p>
                        <p>
                            Neumont walked me back through the basics and helped reinforce widely used concepts such as
                            object oriented programming. Covering different parts of multiple programming languages
                            helped me gain the ability to teach myself new concepts and skills. The Web Design and 
                            Development degree helped me learn a lot of valuable skills such as graphic design, API 
                            Development, Database Administration, Node.JS, Apache, React, Angular, and Spring Boot.  
                        </p>
                        <div className="award-section-break">
                            <hr />
                            <img className="award-icon" src="/images/award-icon.png" alt="Award Icon"/>
                        </div>
                        <p>
                            In 2022, I graduated from Neumont College of Computer Science as Valedictorian.
                            </p>
                        <p>
                            In 2021, my friends and I participated in Neumont's Project Showcase, where we showed off our <Link to="/projects/bifrost">Bifrost project</Link>. This project ended up winning the Overall Audience Favorite award.
                        </p>
                        <p>
                            While developing my coding skills, I had a few opportunities to participate in competitions. 
                            In 2017, I represented my high school in the Spark App League (24 hour) Game Jam, where I won the Best Overall Game award. 
                        </p>
                    </div>
                    <div className="right">
                        <div className="icons-container">
                            <i className="fab fa-html5" data-aos="fade-up"></i>
                            <i className="fab fa-css3" data-aos="fade-up"></i>
                            <i className="fab fa-js-square" data-aos="fade-up"></i>

                            <i className="fab fa-node-js" data-aos="fade-up"></i>
                            <i className="fab fa-react" data-aos="fade-up"></i>
                            <i className="fab fa-angular" data-aos="fade-up"></i>

                            <i className="devicon-spring-plain" data-aos="fade-up"></i>
                            <i className="fab fa-git-alt" data-aos="fade-up"></i>
                            <i className="devicon-csharp-plain" data-aos="fade-up"></i>

                            <i className="fab fa-java" data-aos="fade-up"></i>
                            <i className="devicon-php-plain" data-aos="fade-up"></i>
                            <i className="fab fa-python" data-aos="fade-up"></i>

                            <i className="devicon-nginx-original" data-aos="fade-up"></i>
                            <i className="devicon-raspberrypi-line" data-aos="fade-up"></i>
                            <i className="fab fa-linux" data-aos="fade-up"></i>

                            <i className="devicon-mongodb-plain" data-aos="fade-up"></i>
                            <i className="devicon-illustrator-plain" data-aos="fade-up"></i>
                            <i className="devicon-figma-plain" data-aos="fade-up"></i>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="contact-me">
                <div className="container">
                    <h3>Want to get in touch?</h3>
                    <p>
                        Feel free to reach out to me via email or LinkedIn! 
                    </p>
                    <div className="socials-container">
                    <div className="social-icon-wrapper" data-aos="zoom-in" data-aos-duration="200" data-aos-offset="30">
                    <a className="social-icon gmail" href="mailto:ryanunroe@gmail.com" target="_blank" rel="noreferrer">
                        <i className="fas fa-envelope"></i>
                    </a>
                    </div>
                    <div className="social-icon-wrapper" data-aos="zoom-in" data-aos-duration="200" data-aos-delay="50" data-aos-offset="30">
                    <a className="social-icon linkedin" href="https://www.linkedin.com/in/ryanunroe/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </div>
                </div>
                </div>

            </div>

        </div>
        </>
    )

}


export default Home;
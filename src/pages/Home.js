import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SocialRow from "../components/socials/SocialRow";
import siteData from "../siteData";
import TechnologyIcon from "../components/TechnologyIcon";
import { AwardIcon } from "../components/Icons";
import { Tooltip } from 'react-tooltip';

const Home = () => {
   
   
    


    return(
        <>
        <div className="section gradient hero">
            <div className="container hero-row">
                <div>
                    <h1>
                        Ryan <br />
                        Unroe
                    </h1>
                </div>

                <div className="hero-image-section">
                    <SocialRow />

                    <div className="headshot-container">
                        <motion.img className="headshot-image" 
                            src={"images/site/headshotFull.jpg"}
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{delay: 0.3, duration: 0.3}}
                        />
                    </div>
                </div>
            </div>

        </div>
        <div className="role-section">
            <h2 className="role-text">Developer<br/>Designer</h2>
        </div>
        <div className="light-2 home-content">
            <div className="section about-me">
                <div className="about-me-container">
                    <h3>About Me</h3>
                    <p>
                        I am currently working for the State of Utah designing, developing, and maintaining, food safety websites in React and Java Spring. 
                        In September of 2022, I graduated from <a href="https://www.neumont.edu/" target="_blank" rel="noreferrer" aria-label="View Ryan's alma mater">Neumont College of Computer Science</a> as Valedictorian with a degree in Web Design and Development. <br />
                        Growing up, I had a lot of interest in engineering. Throughout high school, I participated 
                        in my schools <a href="https://www.pltw.org/our-programs/pltw-engineering" target="_blank" rel="noreferrer" aria-label="View PLTW Engineering"> PLTW engineering</a> courses. These courses helped expose me to the different 
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
                            {/* <img className="award-icon" src="/images/award-icon.png" alt="Award Icon"/> */}
                            <AwardIcon />
                        </div>
                        <p>
                            In 2022, I graduated from Neumont College of Computer Science as Valedictorian.
                            </p>
                        <p>
                            In 2021, my friends and I participated in Neumont's Project Showcase, where we showed off our <Link to="/projects/bifrost">Bifrost project</Link>. This project won the <em>Overall Audience Favorite</em> award.
                        </p>
                        <p>
                            While developing my coding skills, I had a few opportunities to participate in competitions. 
                            In 2017, I represented my high school in the Spark App League (24 hour) Game Jam, where I won the <em>Best Overall Game</em> award. 
                        </p>
                    </div>
                    <div className="right">
                        <Tooltip id="icon-name-tooltip" place="bottom" />
                        <div className="icons-container">
                            {siteData.home.knownTechIcons.map(icon => (
                                <TechnologyIcon icon={icon} key={icon} />
                            ))}
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
                    <SocialRow contactTagsOnly/>
                
                </div>

            </div>

        </div>
        </>
    )

}


export default Home;
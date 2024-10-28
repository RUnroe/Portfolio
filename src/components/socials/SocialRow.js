import React from "react";
import { motion } from "framer-motion";
import SocialIcon from "./SocialIcon";

const SocialRow = () => {
    const variants = {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
          transition: {
            opacity: {
              delay: 0.25,
            },
            delay: 0,
            duration: 0.3,
            delayChildren: 0.2,
            staggerChildren: 0.1,
          }
        },
    
    } 

    /*

        <div className="social-icon-wrapper" >
            <a className="social-icon linkedin" href="https://www.linkedin.com/in/ryanunroe/" target="_blank" rel="noreferrer" aria-label="Navigate to Ryan's LinkedIn">
                <i className="fab fa-linkedin-in"></i>
            </a>
        </div>
        <div className="social-icon-wrapper" >
            <a className="social-icon github" href="https://github.com/RUnroe/" target="_blank" rel="noreferrer" aria-label="Navigate to Ryan's Github">
                <i className="fab fa-github"></i>
            </a>
        </div>
        <div className="social-icon-wrapper" >
            <a className="social-icon gmail" href="mailto:ryanunroe@gmail.com" target="_blank" rel="noreferrer" aria-label="Send Ryan an email">
                <i className="fas fa-envelope"></i>
            </a>
        </div>

    */

    const socials = [
      {
        title: "Linkedin", //Use this with title to make image alt e.g. (Linkedin - ryanunroe)
        username: "ryanunroe",
        iconComponent: <i className="fab fa-linkedin-in"></i>,
        url: "https://www.linkedin.com/in/ryanunroe/",
        ariaLabel: "Navigate to Ryan's LinkedIn",
      },
      {
        title: "GitHub", 
        username: "RUnroe",
        iconComponent: <i className="fab fa-github"></i>,
        url: "https://www.linkedin.com/in/ryanunroe/",
        ariaLabel: "Navigate to Ryan's Github",
      },
      {
        title: "Gmail", 
        username: "ryanunroe@gmail.com",
        iconComponent: <i className="fas fa-envelope"></i>,
        url: "mailto:ryanunroe@gmail.com",
        ariaLabel: "Send Ryan an email",
      },
    ]

    return ( 
        <div>
    
          <motion.div className="social-row socials-container" variants={variants} animate="animate" initial="initial">
            {socials.map((socialInfo, index) => (
                <SocialIcon 
                  title={`${socialInfo.title} - ${socialInfo.username}`}
                  url={socialInfo.url}
                  ariaLabel={socialInfo.ariaLabel}
                  IconComponent={(socialInfo.iconComponent) }
                  key={`social-${socialInfo.title}-${index}`}
                />
            ))}
          </motion.div>
        </div>
       );
}

export default SocialRow;
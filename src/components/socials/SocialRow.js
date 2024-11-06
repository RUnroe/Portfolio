import React from "react";
import { motion } from "framer-motion";
import SocialIcon from "./SocialIcon";
import siteData from "../../siteData";

const SocialRow = ({contactTagsOnly = false}) => {
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

    
 
    return ( 
        <div>
    
          <motion.div className={`social-row ${contactTagsOnly ? "socials-contact-container" : "socials-container"}`} variants={variants} whileInView={"animate"} initial="initial">
            {siteData.socials.filter(socialInfo => contactTagsOnly ? socialInfo.isContactSocial : true).map((socialInfo, index) => (
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
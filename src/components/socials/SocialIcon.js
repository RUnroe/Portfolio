import React from "react";
import { motion } from "framer-motion";



const SocialIcon = ({title, url, ariaLabel, IconComponent}) => {
  const variants = {
    initial: {
      scale: 0,
      opacity: 0,
      
    },
    animate: {
      scale: 1,
      opacity: 1,
      
    },
    
  }

  return ( 
    <div className="social-icon-wrapper">
        <motion.a 
        className={`social-icon ${title.toLowerCase()}`}
        href={url} 
        title={title}
        target="_blank" 
        rel="noreferrer" 
        aria-label={ariaLabel}
        variants={variants}
        whileHover={{
            scale: 1.05,
        }}
        >
        {IconComponent}
        </motion.a>
    </div>
   );
}
 
export default SocialIcon;
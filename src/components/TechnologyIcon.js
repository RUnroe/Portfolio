import React from "react";
import { motion } from "framer-motion";


const TechnologyIcon = ({icon}) => (
    <motion.i 
        // title={icon.iconName} 
        className={icon.iconClass} 
        initial={{opacity: 0, y: '100%'}} 
        whileInView={{opacity: 1, y: 0}} 
        transition={{delay: 0.25}} 
        viewport={{once: true}}
        data-tooltip-content={icon.iconName}
        data-tooltip-id="icon-name-tooltip"
    >

    </motion.i>
)

export default TechnologyIcon;
import React from "react";
import { motion } from "framer-motion";


const TechnologyIcon = ({iconClass}) => (
    <motion.i className={iconClass} initial={{opacity: 0, y: '100%'}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.25}} viewport={{once: true}}></motion.i>
)

export default TechnologyIcon;
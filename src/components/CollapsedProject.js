import React from "react";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";


const CollapsedProject = ({title, projectType, coverImage, primaryLanguage, languageColor}) => {
    const formatTitle = () => {
        return (title.toLowerCase().trim().replaceAll(" ", "-"));
    }

    return (
        <Link to={"/projects/" + formatTitle()} className="collapsed-project" >
            <motion.div initial={{opacity: 0, y: "50%"}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: "0% 0% -25% 0%"}}>
                <div className="image-container">
                    <img src={`images/${formatTitle()}/${coverImage}`} alt={formatTitle()}/>
                    <span className="language-tag" style={{backgroundColor:languageColor[0], color:languageColor[1]}}>{primaryLanguage}</span>
                </div>
                <h4>{title}</h4>
                <p>{projectType}</p>
            </motion.div>
        </Link>
    );

}

export default CollapsedProject;
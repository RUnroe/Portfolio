import React, { useEffect, useState } from "react";
import '../styles/projects.css';
import projectData from '../projects.json';
import CollapsedProject from "../partials/CollapsedProject";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectList() {
    const [projectsJSX, setProjectsJSX] = useState([]);


    useEffect(() => {
        getProjectsJSX();
    }, []);

    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 350,
            easing: 'ease-in-sine',
            });
        AOS.refresh();
    }, [projectsJSX]);

    const getProjectsJSX = () => {
        const tempArray = [];

        //loop over project data and create project partials
        projectData.forEach(project => {
            tempArray.push(<CollapsedProject title={project.title} projectType={project.projectType} coverImage={project.coverImage} primaryLanguage={project.primaryLanguage} languageColor={project.languageColor} />)
        });

        setProjectsJSX(tempArray);
    }

    return(
        <>
        <div className="section">
            <div className="container">
                <h3>Ryan's Top Projects</h3>
                <p>All projects can be found on <a href="https://github.com/RUnroe/" target="_blank" rel="noreferrer">GitHub</a>.</p>
            </div>
            <div id="projectContainer" className="container">
                {projectsJSX}
            </div>   
        </div>        
        </>
    )

}


export default ProjectList;
import React, { useEffect, useState } from "react";
import '../styles/projects.css';
import projectData from '../projects.json';
import CollapsedProject from "../partials/CollapsedProject";


function ProjectList() {
    const [projectsJSX, setProjectsJSX] = useState([]);


    useEffect(() => {
        getProjectsJSX();
    }, []);


    const getProjectsJSX = () => {
        const tempArray = [];

        //loop over project data and create project partials
        projectData.forEach(project => {
            tempArray.push(<CollapsedProject title={project.title} projectType={project.projectType} coverImage={project.coverImage} />)
        });

        setProjectsJSX(tempArray);
    }

    return(
        <>
        <div className="section">
            <div className="container">
                <h3>Ryan's Projects</h3>
                <p>All projects can be found on <a href="https://github.com/RUnroe/" target="_blank">GitHub</a></p>
            </div>
            <div id="projectContainer" className="container">
                {projectsJSX}
            </div>   
        </div>        
        </>
    )

}


export default ProjectList;
import React from "react";
import siteData from "../siteData";
import CollapsedProject from "../components/CollapsedProject";

const ProjectList = () => {
    return(
        <>
        <div className="section">
            <div className="container">
                <h3>Ryan's Top Projects</h3>
                <p>All projects can be found on <a href="https://github.com/RUnroe/" target="_blank" rel="noreferrer" aria-label="View Ryan's Github">GitHub</a>.</p>
            </div>
            <div id="projectContainer" className="container">
                { 
                    siteData.projects.map(project => (
                        <CollapsedProject title={project.title} projectType={project.projectType} coverImage={project.coverImage} primaryLanguage={project.primaryLanguage} languageColor={project.languageColor} />
                        ))
                }
            </div>   
        </div>        
        </>
    )

}


export default ProjectList;
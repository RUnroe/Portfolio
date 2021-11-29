import React, { useEffect, useState } from "react";
import '../styles/project.css';
import { useParams, Redirect, Link } from 'react-router-dom';
import projectData from '../projects.json';
const data = require('../projects.json');


export default function Project() {
    //get name from query string
    const { projectName } = useParams();
    const [project, setProject] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const formatTitle = (title) => {
        return (title.toLowerCase().trim().replaceAll(" ", "-"));
    }
    const formatDescription = (description) => {
        return description;
    }

    useEffect(() => {
        data.forEach(proj => {
            if(formatTitle(proj.title) === projectName) {
                console.log(proj);
                setProject(proj);
            }
        });
        // if(!project) setRedirect(true);
    }, []);

    if(redirect) return <Redirect to="/"/>
    if(project) {
        return (
            <>
            <div className="section">
                <div className="container">
                    <div className="header">
                        <h3>{project.title}</h3>
                        <h4>{project.projectType}</h4>
                        <hr />

                        <Link to="/projects" className="back"><i className="fas fa-chevron-left"></i> Back</Link>
                    </div>
                    <div className="button-group">
                        {project.githubLink == "" ? <></> : <a href={project.githubLink} className="btn secondary">View on GitHub</a>}
                        {project.liveSiteLink == "" ? <></> : <a href={project.liveSiteLink} className="btn secondary">View Live Site</a>}
                    </div>

                    <div className="image-section">

                    </div>
                    <div className="description-section" dangerouslySetInnerHTML={{__html: project.description}}>
                    </div>
                </div>
            </div>
            </>
        );
    }
    else return <></>;
}
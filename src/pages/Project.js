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

                        <div className="back">Back</div>
                    </div>
                    <div className="button-group">
                        <a href="" className="btn secondary">View on GitHub</a>
                        <a href="" className="btn secondary">View Live Site</a>
                    </div>

                    <div className="image-section">

                    </div>
                    <div className="description-section">
                        
                    </div>
                </div>
            </div>
            </>
        );
    }
    else return <></>;
}
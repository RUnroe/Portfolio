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
    const [imagesJSX, setImagesJSX] = useState(<></>);

    const formatTitle = (title) => {
        return (title.toLowerCase().trim().replaceAll(" ", "-"));
    }
    const createImagesJSX = (title, images) => {
        let srcRoot = `/images/${formatTitle(title)}/`; 

        let tempImageList = [];
        images.forEach(image => {
            tempImageList.push(<div className={`img-container c${images.length}`}> <img src={`${srcRoot}${image}`}/> </div>);
        })
        setImagesJSX(
            <div className={`images s${images.length > 4 ? 4 : images.length}`}>
                {tempImageList}
            </div>
        );

        
    }

    useEffect(() => {
        data.forEach(proj => {
            if(formatTitle(proj.title) === projectName) {
                console.log(proj);
                setProject(proj);
                createImagesJSX(proj.title, proj.images);
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
                        {project.githubLink == "" ? <></> : <a href={project.githubLink} target="_blank" className="btn secondary">View on GitHub</a>}
                        {project.liveSiteLink == "" ? <></> : <a href={project.liveSiteLink} target="_blank" className="btn secondary">View Live Site</a>}
                    </div>

                    <div className="image-section">
                        {imagesJSX}
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
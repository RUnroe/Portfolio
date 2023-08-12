import React, { useEffect, useState, useCallback } from "react";
import '../styles/project.css';
import { useParams, Navigate, Link } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
const data = require('../projects.json');


export default function Project() {
    //get name from query string
    const { projectName } = useParams();
    const [project, setProject] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [imagesJSX, setImagesJSX] = useState(<></>);

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);


    const formatTitle = (title) => {
        return (title.toLowerCase().trim().replaceAll(" ", "-"));
    }
    const createImagesJSX = (title, images, imageLayout) => {
        let srcRoot = `/images/${formatTitle(title)}/`; 

        let tempImageList = [];
        images.forEach((image, index) => {
            tempImageList.push(<div className={`image-container c${index} `}> <img src={`${srcRoot}${image}`} alt={image} onClick={ () => openImageViewer(index) } key={ index }/> </div>);
        })

        
        setImagesJSX(
            <div className={`images ${imageLayout}`}>
                {tempImageList}
            </div>
        );

        
    }  
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
      }, []);
    
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const formatLinks = (links) => {
        let finalLinks = [];
        links.forEach(link => {
            finalLinks.push(`/images/${formatTitle(project.title)}/${link}`);
        });
        return finalLinks;
    }
      

    useEffect(() => {
        let foundProject = false;
        data.forEach(proj => {
            if(formatTitle(proj.title) === projectName) {
                console.log(proj);
                setProject(proj);
                foundProject = true;
                createImagesJSX(proj.title, proj.images, proj.imageLayout);
            }
        });
        if(!foundProject) setRedirect(true);
    }, []);

    if(redirect) return <Navigate to="/"/>
    if(project) {
        return (
            <>
            <div className="section project">
                <div className="container card">
                    <div className="header">
                        <h3>{project.title}</h3>
                        <h4>{project.projectType}</h4>
                        <hr />

                        <Link to="/projects" className="back"><i className="fas fa-chevron-left"></i> Back</Link>
                    </div>
                    <div className="button-group">
                        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn secondary">View on GitHub</a>}
                        {project.liveSiteLink && <a href={project.liveSiteLink} target="_blank" rel="noreferrer"  className="btn secondary">View Live Site</a>}
                    </div>

                    <div className="image-section">
                        {imagesJSX}
                    </div>
                    <div className="description-section" dangerouslySetInnerHTML={{__html: project.description}}>
                    </div>
                </div>
            </div>
            {isViewerOpen && (
                <ImageViewer
                    src={ formatLinks(project.images) }
                    currentIndex={ currentImage }
                    disableScroll={ true }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                    backgroundStyle={{
                        backgroundColor: "#3a3942aa"
                      }}
                />
            )}
            </>
        );
    }
    else return <></>;
}
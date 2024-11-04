import React, { useEffect, useState, useCallback } from "react";
import { useParams, Navigate, Link } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
import siteData from "../siteData";


const Project = () => {
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
    

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
      }, []);

    const createImagesJSX = useCallback((title, images, imageLayout) => {
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
        
    }, [openImageViewer]);
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
    
    const generateProjects = useCallback(() => {
        let foundProject = false;
        siteData.projects.forEach(proj => {
            if(formatTitle(proj.title) === projectName) {
                console.log(proj);
                setProject(proj);
                foundProject = true;
                createImagesJSX(proj.title, proj.images, proj.imageLayout);
            }
        });
        if(!foundProject) setRedirect(true);
    }, [createImagesJSX, projectName]);

    useEffect(() => {
        generateProjects();
    }, [generateProjects]);

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
                        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn secondary" aria-label="View this project on Github">View on GitHub</a>}
                        {project.liveSiteLink && <a href={project.liveSiteLink} target="_blank" rel="noreferrer"  className="btn primary" aria-label="View this project">View Live Site</a>}
                    </div>

                    <div className="image-section">
                        {imagesJSX}
                    </div>
                    <div className="description-section what">
                        <h4>What is it?</h4>
                        <p dangerouslySetInnerHTML={{__html: project.description.what}}/>
                    </div>
                    <div className="description-section technical">
                        <h4>The Technical Side</h4>
                        <p dangerouslySetInnerHTML={{__html: project.description.technical}}/>
                    </div>
                    <div className="description-section takeaways">
                        <h4>What I Learned</h4>
                        <p dangerouslySetInnerHTML={{__html: project.description.takeaways}}/>
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

export default Project;
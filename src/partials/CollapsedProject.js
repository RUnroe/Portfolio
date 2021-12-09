import React from "react";
import {Link} from "react-router-dom";


export default function CollapsedProject({title, projectType, coverImage}) {
    const formatTitle = () => {
        return (title.toLowerCase().trim().replaceAll(" ", "-"));
    }

    return (
        <Link to={"projects/" + formatTitle()} className="collapsed-project" >
            <div data-aos="fade-up">
            <div className="image-container">
                <img src={`images/${formatTitle()}/${coverImage}`} alt={formatTitle()}/>
            </div>
            <h4>{title}</h4>
            <p>{projectType}</p>
            </div>
        </Link>
    );

}
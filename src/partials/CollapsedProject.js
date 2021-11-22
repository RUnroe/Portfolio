import React from "react";
import {Link} from "react-router-dom";


export default function CollapsedProject({title, projectType, coverImage}) {
    const formatTitle = () => {
        return (title.toLowerCase().trim().replace(" ", "-"));
    }

    return (
        <Link to={formatTitle()} className="collapsed-project">
            <img src={coverImage} alt={formatTitle()}/>
            <h4>{title}</h4>
            <p>{projectType}</p>
        </Link>
    );

}
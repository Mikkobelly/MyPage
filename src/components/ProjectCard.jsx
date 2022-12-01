import React from "react";

const ProjectCard = (props) => {
    return <div className="project-card">
        <a href={props.url} className="">
            <h3 className="app-title bold-font">{props.title}</h3>
            <img className="project-image" src={props.imgUrl} />
            <p>{props.description}</p>
        </a>
    </div>
}

export default ProjectCard;

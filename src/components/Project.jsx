import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../ProjectSource";
import YelpCampImg from "../images/yelpcamp.png";
import ToDoListImg from "../images/ToDoList.png";
import KeeperAppImg from "../images/KeeperApp.png";
import WhacAMoleGameImg from "../images/whacamole.png";
import MemoryGameImg from "../images/memorygame.png";

const imgUrls = [YelpCampImg, ToDoListImg, KeeperAppImg, WhacAMoleGameImg, MemoryGameImg];


const Project = () => {
    return <div id="projectSection">
        <h2 className="project section-title medium-font">Project</h2>
        <div className="project-container">
            {projects.map((item, index) => {
                return <ProjectCard key={item.id} title={item.title} description={item.description} url={item.url} imgUrl={imgUrls[index]} />
            })}
        </div>
    </div>
}

export default Project;
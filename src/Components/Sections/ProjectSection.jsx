import React from "react";
import ProjectTile from './Tiles/ProjectTile'
import '../../App.css';
import Projects from "../../Data/Projects.json"


function ProjectSection() {
    return (   
        <div className = "row">
            {Projects.map((item) =>     
            <div className="ProjectRow">
                <ProjectTile Project={item.Project} Type={item.Type} Image={item.Image} Description={item.Description}></ProjectTile>
                <ProjectTile Project={item.Project2} Type={item.Type2} Image={item.Image2} Description={item.Description2}></ProjectTile>
            </div>
            )}
        </div>
    );   
}

export default ProjectSection;
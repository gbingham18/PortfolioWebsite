import React from "react";
import ExperienceTile from './Tiles/ExperienceTile'
import '/Users/grantbingham/Downloads/personalwebsite/src/App.css';
import Experience from "../../Data/Experience.json"

function ExperienceSection() {
    return (
        <div className="ExperienceSection">
            {Experience.map((item) =>         
            <div>
                <ExperienceTile Company={item.Company} Title={item.Title} Location={item.Location} TimeWorked={item.TimeWorked} Image={item.Image} Description={item.Description}></ExperienceTile>
            </div>)}
        </div>
    );   
}

export default ExperienceSection;
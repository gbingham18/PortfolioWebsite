import React from "react";
import '../../App.css';
import Extracurriculars from "../../Data/Extracurriculars.json"
import ExtracurricularTile from './Tiles/ExtracurricularTile'


function ExtracurricularSection() {
    return (  
        <div className="ExtracurricularSection">
            {Extracurriculars.map((item) =>     
                <div>
                    <ExtracurricularTile Extracurricular={item.Extracurricular} Image={item.Image}></ExtracurricularTile>
                </div>
            )}
        </div> 
    );   
}

export default ExtracurricularSection;
import React, {Component} from "react";


class ExperienceTile extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        const image = this.props.Image
        return (
            <div className="ExperienceTile">
                <h3>{this.props.Company}</h3>
                <h4>{this.props.Title}</h4> 
                <div className="LocationAndTimeWorked">
                    <h4 id="Location">{this.props.Location}</h4>
                    <h4>{this.props.TimeWorked}</h4>
                </div>
                <div className="LogoConatiner">
                    <img src={require("../../../Data/Images/" + image + ".png")}/>    
                </div>
                <p>{this.props.Description}</p>
            </div>
        )
    }
}

export default ExperienceTile;
import React, {Component} from "react";


class ExtracurricularTile extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        const image = this.props.Image
        return (
            <div className="ExtracurricularTile">
                <h2>{this.props.Extracurricular}</h2>
                <img src={require("../../../Data/Images/"+ image +".png")}/>
            </div>
        )
    }
}

export default ExtracurricularTile;
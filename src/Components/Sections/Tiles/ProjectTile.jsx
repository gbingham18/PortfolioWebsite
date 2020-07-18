import React, {Component} from "react";


class ProjectTile extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        const image = this.props.Image
        return (
            <div className="ProjectTile">
                <div class="ProjectTileInfo">
                    <h3>{this.props.Project}</h3>
                    <h4>Project Type: {this.props.Type}</h4>
                    <h4>{this.props.Description}</h4>
                </div>
                <img className="ProjectTileImage" src={require("/Users/grantbingham/Downloads/personalwebsite/src/Data/Images/"+ image +".png")}/>
            </div>
        )
    }
}

export default ProjectTile;
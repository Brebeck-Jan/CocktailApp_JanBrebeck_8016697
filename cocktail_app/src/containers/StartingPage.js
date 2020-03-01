import React from "react";
import "./StartingPage.css"
import Background from '../asset/Background.jpg';
import {Link} from "react-router-dom"

class StartingPage extends React.Component {
    constructor(props) {
        super(props);
        console.log("Startingpage props: ", this.props)
    }


    render() {
        return (
            <div className="Startcontent">
                    <p className="welcome">
                        Welcome to your Cocktailapp!
                </p>
                <img alt="Backgroundimage" className="background" src={Background} />
                <Link to={"/ingredients"}>
                <button className="startButton">
                    Start
                </button>
                </Link>
            </div>
        )
    }
};

export default StartingPage
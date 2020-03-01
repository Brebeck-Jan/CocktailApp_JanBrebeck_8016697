import React from "react";
import "./StartingPage.css"
import Background from '../asset/Background.jpg';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"

class StartingPage extends React.Component {
    render() {
        return (
            <div className="Startcontent">
                <p className="welcome">Welcome to your Cocktailapp!</p>
                <img
                    alt="Backgroundimage"
                    className="background"
                    src={Background}
                />
                <Link
                    to={"/ingredients"}
                >
                    <Button
                        variant="contained"
                        className="startButton"
                        style={{
                            "marginLeft": "30%"
                        }}>
                        Start
                        </Button>
                </Link>
            </div>
        )
    }
};
export default StartingPage
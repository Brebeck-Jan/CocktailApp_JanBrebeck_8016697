import React from "react";
import "./StartingPage.css"
import { getAllReceipts, getAllIngridients } from "../databasehandler";
import Drinks from "../components/drinks"
import Background from '../asset/Background.jpg';
import {Link} from "react-router-dom"

class StartingPage extends React.Component {
    constructor(props) {
        super(props);
        console.log("Startingpage props: ", this.props)
    }

    componentWillMount() {
        // let allReceipts = getAllReceipts()
        let allIngridients = getAllIngridients()
        // this.setState({ allReceipts: allReceipts, allIngridients: allIngridients })
        console.log("Ingridients", allIngridients)
    }

    checkForPossibleCocktails() {
    }

    render() {
        return (
            <div className="Startcontent">
                    <p className="welcome">
                        Welcome to your Cocktailapp!
                </p>
                <img className="background" src={Background} />
                <Link to={"/ingridients"}>
                <button className="startButton">
                    Start
                </button>
                </Link>
            </div>
        )
    }
};

export default StartingPage
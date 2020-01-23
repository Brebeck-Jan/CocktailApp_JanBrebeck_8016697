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
        let allReceipts = getAllReceipts()
        let allIngridients = getAllIngridients()
        this.setState({ allReceipts: allReceipts, allIngridients: allIngridients })
        console.log("Receipts", allReceipts)
        console.log("Ingridients", allIngridients)
    }

    checkForPossibleCocktails() {
    }

    render() {
        return (
            <>
                    <p className="welcome">
                        Welcome to your Cocktailapp!
                </p>
                <img className="background" src={Background} style={{ width: "500px", height: "500px", alignItems:"center" }} />
                <Link to={"/ingridients"}>
                <button className="startButton">
                    Start
                </button>
                </Link>
            </>
        )
    }
};

export default StartingPage
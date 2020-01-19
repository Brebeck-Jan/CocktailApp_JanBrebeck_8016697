import React from "react";
import { getAllReceipts, getAllIngridients } from "../databasehandler";

class StartingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        let allReceipts = getAllReceipts()
        let allIngridients = getAllIngridients()
        this.setState({allReceipts:allReceipts, allIngridients:allIngridients})
        console.log("Receipts",allReceipts)
        console.log("Ingridients", allIngridients)
    }

    checkForPossibleCocktails(){

    }
    render() {
        return (
            <div>
                StartingPage
            </div>
        )
    }
};

export default StartingPage
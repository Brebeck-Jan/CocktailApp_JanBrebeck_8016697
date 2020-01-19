import React from 'react';
import "./receipts.css";
import {showReceipts} from "../components/showReceipts"
import { getAllReceipts } from '../databasehandler';

class Receipts extends React.Component {
    constructor(props) {
        super(props)
        let allReceipts = getAllReceipts()
        this.state={allReceipts:allReceipts}
        console.log("Receipts props: ",this.props)
    }

    render() {
        return (
            <React.Fragment>
                {showReceipts(this.state.allReceipts)}
            </React.Fragment>
        
        
            );
    }
}

export default Receipts;
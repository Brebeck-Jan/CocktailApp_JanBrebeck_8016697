import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom'
import { getAllReceipts } from "../databasehandler"
import "./Sidebar.css"

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false }
    }

    componentWillMount() {
        let allReceipts = getAllReceipts()
        this.setState({ allReceipts: allReceipts })
    }

    render() {
        return (
            <Menu isOpen={this.state.isOpen}>
                <a className="menu-item" href='/'>
                    Home
      </a>
                <a className="menu-item" href='/receipts'>
                    Receipts
      </a>
                <a className="menu-item" href="/ingridients">
                    Ingridients at Home
      </a>
                <a className="menu-item" href="/cocktail">
                    Let's make a cocktail!
      </a>
            </Menu>
        );
    }
};

export default Sidebar
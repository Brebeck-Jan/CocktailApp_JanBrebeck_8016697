import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css"

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false }
    }

    componentWillMount() {
        // let allReceipts = getAllReceipts()
        let allReceipts = []
        this.setState({ allReceipts: allReceipts })
    }

    render() {
        return (
            <Menu isOpen={this.state.isOpen}>
                <a className="menu-item" href='/'>
                    Home
      </a>
                <a className="menu-item" href="/ingredients">
                    Zutaten
      </a>
                <a className="menu-item" href='/receipts'>
                    Rezept
      </a>
            </Menu>
        );
    }
};

export default Sidebar
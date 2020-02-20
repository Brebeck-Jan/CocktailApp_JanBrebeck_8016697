import React from 'react';
import "./recipes.css";
import ShowReceipts from "../components/showReceipts"
import List from "@material-ui/core/List"
import { getAllReceipts } from '../databasehandler';
import { ListItem } from '@material-ui/core';
import Recipe from "../components/recipe"

class Receipts extends React.Component {
    constructor(props) {
        super(props)
        this.state = { allReceipts: Object.values(this.props.data), showOneRecipe: false }
        console.log("Receipts this.state.allReceipts:", this.state.allReceipts)
    }

    renderItems(allReceipts) {
        let content = []
        allReceipts.forEach(recipe => {
            console.log("recipe: ", recipe)
            content.push(
                <ListItem onClick={() => {
                    this.setState({ selected: recipe, showOneRecipe: true })
                }}>
                    {recipe.name}
                </ListItem>
            )
        })
        return content
    }

    backButton(){
        this.setState({showOneRecipe: false})
    }

    render() {
        return (
            <div className="recipes">
                {
                this.state.showOneRecipe ?
                        <Recipe recipe={this.state.selected} backButton={this.backButton.bind(this)}/>
                        :
                        <>
                            <h1>Alle Cocktailrezepte</h1>
                            <List>
                                {this.renderItems(this.state.allReceipts)}
                            </List>
                        </>
                }
            </div>
        );
    }
}

export default Receipts;
import React from 'react';
import "./recipes.css";
import List from "@material-ui/core/List"
import { ListItem } from '@material-ui/core';
import Recipe from "../components/recipe"
import {idGenerator} from "../idGenerator"

class Receipts extends React.Component {
    constructor(props) {
        super(props)
        this.state = { allRecipes: Object.values(this.props.data), showOneRecipe: false }
    }

    renderItems(allReceipts) {
        let content = []
        allReceipts.forEach(recipe => {
            console.log("recipe: ", recipe)
            content.push(
                <ListItem 
                key={idGenerator(recipe.name)}
                onClick={() => {
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
                            <List key={idGenerator("Alle")}>
                                {this.renderItems(this.state.allRecipes)}
                            </List>
                        </>
                }
            </div>
        );
    }
}

export default Receipts;
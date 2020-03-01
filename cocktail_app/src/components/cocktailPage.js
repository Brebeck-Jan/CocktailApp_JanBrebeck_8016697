import React from 'react';
import { getAllRecipes } from '../databasehandler';
import { ListItem, ListItemText } from '@material-ui/core';
import "./recipe.css"
import Recipe from "../components/recipe"
import { Redirect } from 'react-router-dom';
import "./cocktailPage.css"
import { idGenerator } from "../idGenerator"


class CocktailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showOneRecipe: false }
  }

  allRecipes = []
  allRecipes = Object.values(getAllRecipes())
  props = { location: { selected: ["Rum", "Wodka"], shopping: true } }

  matchRating = (selectedIngredients) => {
    this.allRecipes.forEach(recipe => {
      let matchedIngredients = []
      recipe.ingredients.forEach(ingredient => {
        if (selectedIngredients.indexOf(ingredient) >= 0) {
          matchedIngredients.push(ingredient)
        }
      })
      recipe["matchingRate"] = matchedIngredients.length / recipe.ingredients.length
    })
  }

  backButton() {
    this.setState({ showOneRecipe: false })
  }

  createContent = (recipes, shopping) => {
    let content = []
    if (shopping) {
      recipes = Array.from(recipes)
      recipes = recipes.filter(recipe => recipe.matchingRate !== 1)
      recipes.sort(function (a, b) {
        if (a.matchingRate > b.matchingRate) {
          return -1;
        }
        else if (a.matchingRate < b.matchingRate) {
          return 1;
        }
        return 0;
      })
    } else {
      recipes = recipes.filter(reciep => reciep.matchingRate === 1)
    }
    recipes.forEach(recipe => {
      content.push(
        <ListItem
          key={idGenerator(recipe.name)}
          onClick={() => {
            this.setState({ selected: recipe, showOneRecipe: true })
          }}>
          <ListItemText
            key={idGenerator(recipe.name + "text")}>
            {recipe.name}
          </ListItemText>
          <ListItemText
            key={idGenerator("Matchingrate")}>
            {Math.round(recipe.matchingRate * 100)}%
          </ListItemText>
        </ListItem>
      );

    })
    return content
  }

  createView = () => {
    let content
    if (this.props.location.shopping) {
      content = [
        <div className="Test1">
          <p>
            Hier sind drei Vorschläge:
            </p>
          <p>
            (einfach auf den Namen klicken)
            </p>
          {this.createContent(this.allRecipes, true)}
        </div>
      ]
    } else {
      content = [
        <div className="Test2">
          <p>
            Hier sind alle möglichen Cocktails mit Ihren Zutaten:
  </p>
          <p>
            (einfach auf den Namen klicken)
  </p>
          {this.createContent(this.allRecipes, false)}
        </div>
      ]
    }
    return content
  }
  render() {
    if (!this.props.location.selected) {
      return (
        <Redirect to="/ingredients"></Redirect>
      )
    } else {
      this.matchRating(this.props.location.selected)
      console.log("location: ", this.props.location)
      return (
        <div className="CocktailPageContent">
          {
            this.state.showOneRecipe ?
              <Recipe recipe={this.state.selected} backButton={this.backButton.bind(this)} />
              : this.createView()
          }
        </div>
      );
    }
  }
}
export default CocktailPage
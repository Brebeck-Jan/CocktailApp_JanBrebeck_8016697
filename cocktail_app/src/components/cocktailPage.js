import React from 'react';
import { getAllReceipts } from '../databasehandler';
import { ListItem, ListItemText } from '@material-ui/core';
import "./recipe.css"
import Recipe from "../components/recipe"
import { Redirect } from 'react-router-dom';
import "./cocktailPage.css"


class Cocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showOneRecipe: false }

  }

  allRecieps = []
  allRecieps = Object.values(getAllReceipts())
  props = { location: { selected: ["Rum", "Wodka"], shopping: true } }

  matchRating = (selectedIngredients) => {
    console.log("selectedIngre: ", selectedIngredients)
    this.allRecieps.forEach(reciept => {
      let matchedIngredients = []
      reciept.ingredients.forEach(ingredient => {
        if (selectedIngredients.indexOf(ingredient) >= 0) {
          matchedIngredients.push(ingredient)
        }
      })
      reciept["matchingRate"] = matchedIngredients.length / reciept.ingredients.length
    })
  }

  backButton() {
    this.setState({ showOneRecipe: false })
  }

  createContent = (recieps, shopping) => {
    let content = []
    if (shopping) {
      recieps = Array.from(recieps)
      // TODO vorher == wenns funktioniert passts
      recieps = recieps.filter(reciept => reciept.matchingRate !== 1)
      console.log(recieps)
      recieps.sort(function (a, b) {
        if (a.matchingRate > b.matchingRate) {
          return -1;
        }
        else if (a.matchingRate < b.matchingRate) {
          return 1;
        }
        return 0;
      })
    } else {
      // TODO vorher == wenns funktioniert passts
      recieps = recieps.filter(reciep => reciep.matchingRate === 1)
    }
    console.log("TEst reciepe: ", recieps)
    recieps.forEach(recipe => {
      content.push(
        <ListItem onClick={() => {
          this.setState({ selected: recipe, showOneRecipe: true })
        }}>
          <ListItemText>

            {recipe.name}
          </ListItemText>
          <ListItemText>
            {Math.round(recipe.matchingRate * 100)}%
          </ListItemText>
        </ListItem>
      );

    })
    console.log("Content: ", content)
    return content
  }

  createView = () => {
    let content
    if (this.props.location.shopping) {
      content = [
        <>
          Hier sind drei Vorschläge:
          (einfach auf den Namen klicken)
        {this.createContent(this.allRecieps, this.props.location.shopping)}
        </>
      ]
    } else {
      content = [
        <>
          Hier sind alle möglichen Cocktails mit Ihren Zutaten:
          (einfach auf den Namen klicken)
          {this.createContent(this.allRecieps, true)}
        </>
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

export default Cocktail
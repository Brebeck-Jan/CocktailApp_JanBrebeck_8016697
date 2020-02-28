import React from 'react';
import { getAllReceipts } from '../databasehandler';

class Cocktail extends React.Component {
  constructor(props) {
    super(props);
    console.log("Cocktail probs: ", props)

  }

  allReciepts = []
  allReciepts = Object.values(getAllReceipts())
  props = { location: { selected: ["Rum", "Wodka"], shopping: true } }

  matchRating = (selectedIngredients) => {
    console.log(this.allReciepts)
    this.allReciepts.forEach(reciept => {
      let matchedIngredients = []
      reciept.ingredients.forEach(ingredient => {
        if (ingredient in selectedIngredients) {
          matchedIngredients.push(ingredient)
        }
      })
      console.log("matchedIngredients: ", matchedIngredients)
      reciept["matchingRate"] = matchedIngredients.length / reciept.ingredients.length
    })
  }

  //TODO:
  // this.state.allReciepts.filter(element => element.matchingRate)

  createContent = (reciepts, shopping) => {
    let content = []
    // for loop:
    // <div>{reciepts[i].name}</div>
    // <div>{reciepts[i].picture}</div>
    // <div><button>Click ME</button></div>

  }

  // TODO redirect bei keiner Auswahl
  render() {
    console.log("location: ", this.props.location)
    return (
      <>
        {this.props.location.shopping ?
          <div>Einkaufen gehen
            {this.matchRating(["Wodka"])}
          </div>
          :
          <div>Nicht einkaugen
            {this.matchRating(["Wodka"])}
          </div>

        }
      </>
    );
  }
}

export default Cocktail
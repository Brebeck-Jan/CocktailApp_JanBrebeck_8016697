import React from 'react';

class Cocktail extends React.Component {
  constructor(props) {
    super(props);
    console.log("Cocktail probs: ", props)

  }
  // probs.allReciepts
  // probs.allIngredients

  // matchingCocktails = (ingredients, allReciepts) => {
  //   console.log("oass")
  // }

  // this.state.allReciepts.forEach(reciept => {
  //   reciept.ingredients.forEach(ingredient => {
  //     if (ingredient in ingredients) {
  //       delete matches.reciept.id
  //     }
  //   })
  // })

  render() {
    console.log("location: ", this.props.location)
    return (
      <div>
        Test
      </div>
    );
  }
}

export default Cocktail
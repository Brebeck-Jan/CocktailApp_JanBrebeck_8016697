import React from 'react';

export default function cocktail(probs) {
  console.log("Cocktail probs: ", probs)
  probs.allReciepts
  probs.allIngredients

  let matchingCocktails = (ingredients, allReciepts) => {
    let matches = allReciepts.copy()

    allReciepts.forEach(reciept => {
      reciept.ingredients.forEach(ingredient => {
        if (ingredient in ingredients) {
          delete matches.reciept.id
        }
      })
    })
  }

  return (
    <div>
      Test
    </div>
  );
}
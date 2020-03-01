import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Recipes from "./containers/recipes"
import { getAllRecipes } from './databasehandler';
import Ingridients from "./components/Ingridients"
import Startingpage from "./containers/StartingPage"
import CocktailPage from "./components/cocktailPage"
import "./App.css"
import Sidebar from './containers/SideBar';

function App() {
  let allItems = []
  allItems = getAllRecipes()

  return (
    <div className="start">
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path="/" render={() => <Startingpage data={allItems} />} exact />
          <Route path="/ingredients" render={() => <Ingridients data={allItems} />} exact />
          <Route path="/receipts" render={() => <Recipes data={allItems} />} exact />
          <Route path="/cocktail" component={CocktailPage} exact />
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;

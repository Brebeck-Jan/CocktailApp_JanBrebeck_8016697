import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Recipes from "./containers/recipes"
import { addReceipt, getOneReceipt, deleteReceipt, getAllReceipts } from './databasehandler';
import NavBar from "./components/navBar"
import Ingridients from "./components/Ingridients"
import { drinks } from './components/drinks';
import Startingpage from "./containers/StartingPage"
import Cocktail from "./components/cocktail"
import Background from './asset/Background.jpg';
import "./App.css"

// TODO gleichbleibender Header


function App() {
  let allItems = []
  allItems = getAllReceipts()
  console.log(allItems)


  return (
    <div className="start">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" render={() => <Startingpage data={allItems} />} exact />
          <Route path="/ingredients" render={() => <Ingridients data={allItems} />} exact />
          <Route path="/receipts" render={() => <Recipes data={allItems} />} exact />
          <Route path="/cocktail" component={Cocktail}
          // render={() => {
          //   console.log("Test231", this.props.location)
          //   return (< Cocktail data = { allItems }
          // />)}} 
          
          exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

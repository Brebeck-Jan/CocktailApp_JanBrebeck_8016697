import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Receipts from "./containers/receipts"
import { addReceipt, getOneReceipt, deleteReceipt, getAllReceipts } from './databasehandler';
import { navBar } from "./components/navBar"
import Ingridients from "./components/Ingridients"
import { drinks } from './components/drinks';
import Startingpage from "./containers/StartingPage"
import {cocktail} from "./components/cocktail"

function App() {
  return (
    <div>
      <Router>
        {navBar()}
        <Switch>
          <Route path="/" component={Startingpage} exact />
          <Route path="/receipts" component={Receipts} exact />
          <Route path="/ingridients" component={Ingridients} exact />
          <Route path="/cocktail" component={cocktail} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

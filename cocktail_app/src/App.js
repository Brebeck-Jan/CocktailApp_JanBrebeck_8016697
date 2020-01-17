import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Receipts from "./containers/receipts"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Receipts} exact />
      </Switch>
    </Router>
  );
}

export default App;

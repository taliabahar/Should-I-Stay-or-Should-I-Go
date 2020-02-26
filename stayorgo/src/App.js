import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InputFields from "./InputFields";
import Comparison from "./Comparison";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={InputFields}></Route>
          <Route exact path="/comparison" component={Comparison}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

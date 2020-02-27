import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InputFields from "./InputFields";
import Comparison from "./Comparison";

function App() {
  return (
    <Router>
      <link rel="stylesheet" href="https://use.typekit.net/mdr8lxf.css"></link>
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

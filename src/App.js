import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";

import Home from "./Home";
import SimpleForm from "./form/SimpleForm";
import SimpleAPIForm from "./form/SimpleAPIForm";
import ReduxCounterHome from "./redux/ReduxCounterHome";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/simple_form">
            <SimpleForm />
          </Route>
          <Route path="/simple_api_form">
            <SimpleAPIForm />
          </Route>
          <Route path="/redux_counter">
            <ReduxCounterHome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import SavedBooks from "./components/SavedBooks";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path="/" exact component={SearchForm} />
              <Route path="/save" component={SavedBooks} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

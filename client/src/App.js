import React from "react";
import Jumbotron from "./components/Jumbotron";
import SaveBooks from "./pages/SaveBooks"
import SearchBooks from "./pages/SearchBooks"
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./utils/style.css"
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";

// import Nav from "./components/Nav";

function App() {
  return (

    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

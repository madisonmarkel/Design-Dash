import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Brands from "./pages/Brands";
import Home from "./pages/Home";
import IndividualBrands from "./pages/IndividualBrands";
import "./App.css";

// import Header from "./components/Header/Header";
// import PixabaySearch from "./components/Pixabay/PixabaySearch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/brands" component={Brands} />
          <Route exact path="/brands/:id" component={IndividualBrands} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

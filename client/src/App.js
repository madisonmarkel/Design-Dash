import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Brands from "./pages/Brands";
import Home from "./pages/Home";
import "./App.css";

// import Header from "./components/Header/Header";
// import PixabaySearch from "./components/Pixabay/PixabaySearch";

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/brands" component={Brands} />
      </div>
    </Router>
  );
}

export default App;

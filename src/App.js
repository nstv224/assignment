import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mylooks from "./pages/Mylooks";
import Mystyle from "./pages/Mystyle";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Mylooks" component={Mylooks} />
          <Route path="/Mystyle" component={Mystyle} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

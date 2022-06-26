import './App.css';
import React from "react"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

import DogDetails from "./Components/DogDetails"
import NavBar from './Components/NavBar';

import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar dogs={dogs} />
        <Switch>
          <Route exact path="/dogs" element={<h1>Doggos</h1>} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          {/* In version six of React-Router, the Navigate component must be placed within the element ref. path="*" has special meaning here, as it essentially looks for any non-matching URL's and redirects. https://reactrouter.com/docs/en/v6/getting-started/tutorial#adding-a-no-match-route These docs are incomplete and rife with errors, there was very little done to ensure any kind of quality control on these docs, so take that with a grain of salt. Stack Overflow is your friend. */}
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Switch>
      </Router>
    </div>
  );
}


export const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
]

App.defaultProps = { dogs }

export default App;

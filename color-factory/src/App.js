import './App.css';
import { useState } from "react"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

import ColorPage from "./Components/ColorPage"
import Home from "./Components/Home"
import AddColor from './Components/AddColor';

function App() {
  const [colors, setColors] = useState(["green", "red", "purple"])

  const handleAdd = newColor => {
    setColors(data => ([...data, newColor]))
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" element={<Home colors={colors} />} />
          <Route exact path="/:color" element={<ColorPage />} />
          <Route exact path="/add" element={<AddColor handleAdd={handleAdd} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

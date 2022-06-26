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
  const [colors, setColors] = useState("")

  const colorData = (selectedColorData) => {
    setColors(selectedColorData)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" element={<Home colors={colors} />} />
          <Route exact path="/:color" element={<ColorPage />} />
          <Route exact path="/add" colorData={colorData} element={<AddColor />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

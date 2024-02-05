import Oladipo from "./pages/Oladpio/Oladipo";
import Teams from "./pages/Teams";
import Form from "./pages/Form";
import React from "react";
import Example from "./pages/Example"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Teams />} />
          <Route path="/Oladipo" element={<Oladipo />} /> 
          <Route path="/form" element={<Form />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

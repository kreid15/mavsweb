import Players from "./pages/Players";
import Teams from "./pages/Teams";
import Form from "./pages/Form";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Teams />} />
          <Route path="/players" element={<Players />} /> 
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

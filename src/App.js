import Players from "./pages/Players";
import Teams from "./pages/Teams";
import Form from "./pages/Form";
import React, {Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path= "/" element={<Teams />} />
          <Route exact path= "/players" element={<Players />} /> 
          <Route exact path= "/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
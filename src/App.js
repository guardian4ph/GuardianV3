import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import TempLAnding from "./components/tempLanding/TempLAnding";

function App() {
  return (
    <Router>
      {/* Define routes */}
      <Routes>
        <Route path="/" element={<TempLAnding />} />
      </Routes>
    </Router>
  );
}

export default App;

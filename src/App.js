// Import React's Components
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import App.css
import "./App.css";

import DashboardPage from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import FoodClassifier from "./FoodClassifier";
import GoogleMapComponent from "./GoogleMapComponent"; // Import GoogleMapComponent
import RecipesPage from "./RecipesPage";
import ManureConversion from "./ManureConversion"; // Import ManureConversion

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/foodclassifier" element={<FoodClassifier />} />
        <Route path="/google-map" element={<GoogleMapComponent />} /> {/* Route for Google Map */}
        <Route path="/recipes" element={<RecipesPage />} /> {/* Route for Recipes Page */}
        <Route path="/manure-conversion" element={<ManureConversion />} /> {/* Route for Manure Conversion */}
      </Routes>
    </Router>
  );
};

export default App;
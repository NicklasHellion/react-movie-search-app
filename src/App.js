import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Add } from "./components/Add";
import { Watched } from "./components/Watched";
import { Watchlist } from "./components/Watchlist";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="./components/Watchlist.js" element={<Watchlist />} />
        <Route exact path="./components/Watched.js" element={<Watched />} />
        <Route exact path="./components/Add.js" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;

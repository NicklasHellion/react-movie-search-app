import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watched } from "./components/Watched";
import { Watchlist } from "./components/Watchlist";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="watchlist" element={<Watchlist />} />
            <Route path="watched" element={<Watched />} />
            <Route path="add" element={<Add />} />
          </Routes>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element="{/}">
          COMPONENT #1
        </Route>
        <Route path="/" element="{/}">
          COMPONENT #2
        </Route>
        <Route path="/" element="{/}">
          COMPONENT #3
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "@components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;

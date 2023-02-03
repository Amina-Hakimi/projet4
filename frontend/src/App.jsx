import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import "./App.css";
import Ateliers from "@pages/Ateliers";
import OneAtelier from "@pages/OneAtelier";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/ateliers" element={<Ateliers />} />
          <Route path="/ateliers/:id" element={<OneAtelier />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

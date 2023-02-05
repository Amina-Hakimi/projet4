import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import "./App.css";
import Ateliers from "@pages/Ateliers";
import OneAtelier from "@pages/OneAtelier";
import Accueil from "@pages/Accueil";
import Login from "@pages/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ateliers" element={<Ateliers />} />
          <Route path="/ateliers/:id" element={<OneAtelier />} />
          <Route path="/accueil" element={<Accueil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

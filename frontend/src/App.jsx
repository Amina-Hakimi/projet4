import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import "./App.css";
import Ateliers from "@pages/Ateliers";
import OneAtelier from "@pages/OneAtelier";
import Footer from "@components/Footer";
import Home from "@pages/Home";
import Header from "@components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/accueil" element={<Home />} />
          <Route path="/ateliers" element={<Ateliers />} />
          <Route path="/ateliers/:id" element={<OneAtelier />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

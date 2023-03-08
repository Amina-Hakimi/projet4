import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import "./App.css";
import Ateliers from "@pages/Ateliers";
import OneAtelier from "@pages/OneAtelier";
import Accueil from "@pages/Accueil";
import Login from "@pages/Login";
import Contact from "@pages/Contact";
import Admnistration from "@pages/Admnistration";
import Modify from "@pages/Modify";
import Header from "@components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ateliers" element={<Ateliers />} />
          <Route path="/ateliers/:id" element={<OneAtelier />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/barcelonne" element={<Admnistration />} />
          <Route path="/modify" element={<Modify />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

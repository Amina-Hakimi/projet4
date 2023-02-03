import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import "./App.css";
import Ateliers from "@pages/Ateliers";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       <Routes>
        <Route path="/ateliers" element={<Ateliers />} />
       </Routes>
        
      </div>
    </Router>
  );
}

export default App;

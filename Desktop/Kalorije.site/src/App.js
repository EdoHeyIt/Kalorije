import React from "react";
import "./App.scss";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aktivnosti from "./pages/Aktivnosti";
import Kalorije from "./pages/Kalorije";
import Bmr from "./pages/Bmr";
import Bmi from "./pages/Bmi";
import Footer from "./components/Footer";
import NavigateTop from "./components/NavigateTop";

function App() {
  return (
    <>
      <Router>
        <NavigateTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Kalorije />} />
          <Route path="/Aktivnosti" element={<Aktivnosti />} />
          <Route path="/Bmr" element={<Bmr />} />
          <Route path="/Bmi" element={<Bmi />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

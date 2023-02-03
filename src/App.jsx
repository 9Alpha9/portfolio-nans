import { useState } from "react";
import LandingPages from "./pages/LandingPages";
import AboutPages from "./pages/AboutPages";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Navbar className="top-0" />
            <Routes>
                <Route path="/" element={<LandingPages />} />
                <Route path="/about" element={<AboutPages />} />
            </Routes>
        </Router>
    );
};

export default App;

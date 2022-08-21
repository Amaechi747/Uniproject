// import './App.css';
<<<<<<< Updated upstream
import React from "react"
=======
import React from "react";
>>>>>>> Stashed changes
import { Routes, Route } from "react-router-dom"
import { Signup, Signin } from './components/auth';
import { Home, About, Contact } from "./pages"
import { Navbar, Footer } from "./components"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

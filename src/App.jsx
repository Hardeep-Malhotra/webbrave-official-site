import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import Portfolio from "./pages/Portfolio";
import Process from "./pages/Process";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ui/scrollToTop";

import './App.css'





function App() {
  return (
    <>
       <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
             <Route path="/services" element={<Services />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </BrowserRouter>
    </>
  );
}

export default App

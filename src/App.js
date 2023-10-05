import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from '../src/Component/Aboutus/Aboutus'
import Contactus from '../src/Component/Contactus/Contactus';
import Home from '../src/Component/home/Home';
import Navbar from '../src/Component/Navbar/Navbar';
import Serv from '../src/Component/sevices/service';
import Carasoul from './Component/Carasoul';
import OneCarasoul from './Component/OneCarasoul';
import ColorCarasoul from './Component/ColorCarasoul';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route  path="/home" index element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/service" element={<Serv />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

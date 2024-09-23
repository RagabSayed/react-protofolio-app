import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header.js";
import MainSec from "./components/MainSec.js";
import MyProject from './components/MyProject.js';
import Skills from './components/Skills.js';
import Footer from './components/Footer.js';
import React, {useRef} from 'react'
function App() {
  
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route >
            <Route path="/" element={<MainSec />} />
            <Route path="home" element={<MainSec />} />
            <Route path="*" element={"This page is not found!"}/>
          </Route>
        </Routes>
      </Router>
      <Skills />
      <MyProject />
      {/* <ImageSec />
      <GetInTouch /> */}
      <Footer />
    
    </div>
  );
}

export default App;

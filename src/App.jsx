import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

import Signup from './components/Signup'
import Teachersignup from './components/Teachersignup';
import Teacherlogin from './components/Teacherlogin';

// import Home from './components/Home';

export default function App() {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/teacherlogin" element={<Teacherlogin/>} />
          <Route path="/teachersignup" element={<Teachersignup/>} />
          {/* <Route path="/home" element={<Home/>} /> */}




          {/* Add more routes here */}
        </Routes>
      </Router>
    </div>
  );
}

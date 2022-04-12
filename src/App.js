import './App.css';
import * as React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Log from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Log/>} />
      </Routes>
    </Router> 
  );
}


export default App;

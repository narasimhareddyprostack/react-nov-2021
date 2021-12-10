import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Login from "./Basics/Login";

import Digital from "./Basics/Digital";
import SMS from "./Basics/SMS";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/showpassword" element={<Login />} />
          <Route path="/sms" element={<SMS />} />
          <Route path="/digital" element={<Digital />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

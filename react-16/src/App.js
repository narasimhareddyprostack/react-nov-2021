import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Message from "./Message/Message";
import Counter from "./Counter/Counter";
import Product from "./Product/Product";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/message" element={<Message />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

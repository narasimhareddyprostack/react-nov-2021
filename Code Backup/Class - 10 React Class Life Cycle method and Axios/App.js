import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import StateEx from "./components/StateEx";
import PropsEx from "./components/PropsEx";
import Registration from "./components/Registration";
import User from "./HTTPAPI/User";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/stateex" element={<StateEx />} />
          <Route path="/propsex" element={<PropsEx />} />
          <Route path="/form" element={<Registration />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

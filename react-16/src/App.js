import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./User/User";
import Navbar from "./Navbar/Navbar";
import Digital from "./Digital/Digital";
import DigitalFun from "./Digital/DigtalFun";
let App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/time" element={<Digital />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;

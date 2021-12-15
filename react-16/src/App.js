import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Message from "./Message/Message";
import {} from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/message" element={<Message />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;

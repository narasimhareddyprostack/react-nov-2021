import React from "react";
import Navbar from "./Navbar/Navbar";
import Counter from "./Counter/Counter";
import Message from "./Message/Message";
function App() {
  return (
    <div>
      <Navbar />
      <Counter />
      <hr />
      <Message />
    </div>
  );
}

export default App;

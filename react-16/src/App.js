import React from "react";
import Header from "./Header/Header";
import User from "./User/User";
let App = () => {
  return (
    <div>
      <nav>
        <a href="/" alt="dummy Text">
          Props Example
        </a>
      </nav>
      <hr />
      {/* <Header /> */}
      <User />
    </div>
  );
};

export default App;

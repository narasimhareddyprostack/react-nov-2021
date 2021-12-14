import React, { useState } from "react";
let Message = () => {
  //let message = "Hello";
  let [message, setMessage] = useState("Hello");

  return (
    <React.Fragment>
      <h4> Message :{message}</h4>
      <button
        onClick={() => {
          setMessage("Good Morning");
        }}
      >
        {" "}
        GM
      </button>
    </React.Fragment>
  );
};
export default Message;

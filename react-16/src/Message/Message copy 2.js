import React, { useState } from "react";
let Message = () => {
  //let message = "Hello";
  let [message, setMessage] = useState("Hello");
  
  let updateMessageHandler = () => {
    setMessage("Good Morning");
  };
  return (
    <React.Fragment>
      <h4> Message :{message}</h4>
      <button onClick={updateMessageHandler}> GM</button>
    </React.Fragment>
  );
};
export default Message;

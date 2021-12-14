import React from "react";
let Message = () => {
  let message = "Hello";
  let updateMessageHandler = () => {
    console.log("Test case 123");
    message = "Good Morning";
    console.log(message);
  };
  return (
    <React.Fragment>
      <h4> Message :{message}</h4>
      <button onClick={updateMessageHandler}> GM</button>
    </React.Fragment>
  );
};
export default Message;

import React, { useState } from "react";
let Message = () => {
  let [message, setMessage] = useState("Hello................");
  return (
    <>
      <h1>Message : {message}</h1>
      <button
        onClick={() => {
          setMessage("GM");
        }}
      >
        GM
      </button>
      <button
        onClick={() => {
          setMessage("Good Afternoon");
        }}
      >
        GA
      </button>
      <button
        onClick={() => {
          setMessage("Good Night");
        }}
      >
        GN
      </button>
    </>
  );
};
export default Message;

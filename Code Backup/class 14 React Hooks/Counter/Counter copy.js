import React, { useState } from "react";
let Counter = () => {
  let [counter, setCounter] = useState(0);
  return (
    <>
      <h4>Counter Value:{counter}</h4>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        INCR
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        DECR
      </button>
    </>
  );
};
export default Counter;

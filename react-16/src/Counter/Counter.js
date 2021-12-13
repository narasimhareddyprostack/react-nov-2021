import React, { useState } from "react";
let Counter = () => {
  let [state, setState] = useState({ qty: 9 });
  let incrHandler = () => {
    console.log("Test case 123");
    setState({ qty: state.qty + 1 });
    console.log(state.qty);
  };
  return (
    <>
      <h4>Counter Value:{state.qty}</h4>
      <pre>{JSON.stringify(state)}</pre>
      {state.qty < 10 ? (
        <>
          <button onClick={incrHandler}>INCR</button>
        </>
      ) : null}
    </>
  );
};
export default Counter;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gmAction, gnAction } from "../redux/message/message.action";
let Message = () => {
  let dispatch = useDispatch();
  let storeMessage = useSelector((state) => {
    return state.message;
  });
  let gmHandler = () => {
    //dispatch gm - action
    console.log("gmHandler");
    dispatch(gmAction());
  };
  let gnHanlder = () => {
    //dispatch gm - action
    dispatch(gnAction());
  };
  return (
    <div>
      <h2>Message Component</h2>
      <pre>{JSON.stringify(storeMessage)}</pre>
      {/* <h3>Message :{storeMessage}</h3> */}
      <button onClick={gmHandler}>GM</button>
      <button onClick={gnHanlder}>GN</button>
    </div>
  );
};

export default Message;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gmAction, gnAction } from "../redux/message/message.action";
let Message = () => {
  let dispatch = useDispatch();
  let message = useSelector((state) => {
    return state.message;
  });
  let gmHandler = () => {
    //dispatch gm - action
    dispatch(gmAction());
  };
  let gnHanlder = () => {
    //dispatch gm - action
    dispatch(gnAction());
  };
  return (
    <div>
      <h2>Message Component</h2>
      <h3>Message :{"Hello"}</h3>
      <button onClick={gmHandler}>GM</button>
      <button onClick={gnHanlder}>GN</button>
    </div>
  );
};

export default Message;

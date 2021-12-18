import React, { useReducer, useState } from "react";
import MessageOne from "./MessageOne";
import Login from "./Login";
let initialState = { message: "Hello" };

let reducer = (state = initialState, action) => {
  switch (action) {
    case "gm":
      return { message: "Good Monring" };
    case "gn":
      return { message: "Good Night" };
    default:
      return state;
  }
};

let Message = () => {
  let [state, disptach] = useReducer(reducer, initialState);
  //let [state, setState] = useState(initialState);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Message:{state.message}</h3>
              </div>
              <div className="card-body">
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    disptach("gm");
                  }}
                >
                  GM
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    disptach("gn");
                  }}
                >
                  GN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MessageOne />
      <Login />
    </div>
  );
};

export default Message;

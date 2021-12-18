import React, { useState } from "react";
let initialState = { message: "Hello" };
function MessageOne() {
  let [message, setMessage] = useState(initialState);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Message: {message.message}</h3>
              </div>
              <div className="card-body">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setMessage({ message: "Good Monring" });
                  }}
                >
                  GM
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setMessage({ message: "Good Night" });
                  }}
                >
                  GN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageOne;

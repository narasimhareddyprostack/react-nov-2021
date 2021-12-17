import React, { useState, useEffect } from "react";
let DigitalFun = () => {
  let [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    //componentDidmount
    let timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      //componentwillUnMount
      clearInterval(timer);
      console.log(
        "componetWillUnmount - feature ie execute after moving to another componet"
      );
    };
  }, []);
  return (
    <div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card header">
                <h4>{currentTime}</h4>
              </div>
              <div class="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DigitalFun;

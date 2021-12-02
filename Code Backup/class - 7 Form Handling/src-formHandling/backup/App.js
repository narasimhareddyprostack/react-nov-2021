import React from "react";
import Vinay from "./Vinay";
import Car from "./Car"
function App(){
  let mobile = "mobile";
  return(
    <div>
      <h1>{mobile}</h1>
      <hr/>
      <Vinay />
      <hr/>
      <Car />
      <button className="btn btn-success">Test</button>
    </div>
  )
}
export default App
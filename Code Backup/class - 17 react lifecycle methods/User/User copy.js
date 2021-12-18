import React, { useState } from "react";
import Axios from "axios";

let User = () => {
  //let [variable, setVariableFun]= useState([])
  let [user, setUser] = useState([]);
  let getUserHandler = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch();
  };
  return (
    <>
      <h1>User Data....</h1>
    </>
  );
};

export default User;
/*
API  Name: https://jsonplaceholder.typicode.com/users
Method: GET
Type:Public
*/

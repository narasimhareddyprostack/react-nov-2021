import React, { useState, useEffect } from "react";
import Axios from "axios";

let User = () => {
  //let [variable, setVariableFun]= useState([])
  let [user, setUser] = useState([]);

  useEffect(() => {
    console.log("Executing after return statement");
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch();
  }, []);

  return (
    <>
      <pre>{JSON.stringify(user)}</pre>
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

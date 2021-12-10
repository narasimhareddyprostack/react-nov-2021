import React, { Component } from "react";
import Axios from "axios";
class User extends Component {
  state = { userData: [] };
  getDataHanlder = () => {
    //consuming the api
    //Axios.get().then().catch();
    Axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log(response.data);
        this.setState({ userData: response.data });
      })
      .catch(() => {});
  };
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.data)}</pre>
        <button onClick={this.getDataHanlder}>Get Data</button>
        <hr />
        {this.state.userData.map((user) => {
          return <h1>{user.title}</h1>;
        })}
      </div>
    );
  }
}

export default User;

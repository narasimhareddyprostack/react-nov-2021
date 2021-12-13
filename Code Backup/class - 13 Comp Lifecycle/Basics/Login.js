import React, { Component } from "react";

export class Login extends Component {
  state = {
    inputType: "password",
  };
  displayPassword = () => {
    this.setState({ inputType: "text" });
  };
  render() {
    return (
      <div>
        <h1>Login Example</h1>
        <form>
          <input type="text" /> <br />
          <input type={this.state.inputType} placeholder="password" />
          {" "}
          <br />
          <input type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default Login;

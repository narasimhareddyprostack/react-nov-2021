import React, { Component } from "react";

class Message extends Component {
  state = {
    msg: "Hello",
  };
  updateMessageHanlder = (value) => {
    this.setState({ msg: value });
  };
  render() {
    return (
      <>
        <h2>Message : {this.state.msg}</h2>
        <button onClick={this.updateMessageHanlder.bind(this, "Good Morning")}>
          GM
        </button>
        <button
          onClick={this.updateMessageHanlder.bind(this, "Good Afternoon")}
        >
          GA
        </button>
        <button onClick={this.updateMessageHanlder.bind(this, "Good Night")}>
          GN
        </button>
      </>
    );
  }
}

export default Message;

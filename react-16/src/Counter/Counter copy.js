import React from "react";
class Counter extends React.Component {
  state = {
    counter: 0,
  };
  incrHandler = () => {
    console.log(this.state.counter); //0
    this.state.counter = 2;
    //this.setState({ counter: this.state.counter + 1 });
    this.forceUpdate();
  };
  render() {
    console.log("Test Case 123");
    return (
      <React.Fragment>
        <h1> Counter Value: {this.state.counter}</h1>
        <button onClick={this.incrHandler}>Incr</button>
        
      </React.Fragment>
    );
  }
}
export default Counter;

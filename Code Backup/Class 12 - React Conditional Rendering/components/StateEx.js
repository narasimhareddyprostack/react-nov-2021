import React from "react";
class StateEx extends React.Component {
  state = {
    msg: "Hello, Mr:",
  };
  //msg = "Hello, Mr:";
  gmHanlder() {
    console.log(this.state.msg);
    //this.setState({ msg: "Hello, Good Morning" });
    this.state.msg = "Hello, Mr Rajini Kanth";
    console.log(this.state.msg);
  }
  gaHanlder = () => {
    this.setState({ msg: "Hello, Good Afternon" });
  };
  gnHanlder = () => {
    this.setState({
      msg: "Hello, Mr Good Night",
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <button
          className="btn btn-success"
          onClick={() => {
            this.gmHanlder();
          }}
        >
          GM
        </button>
        <button className="btn btn-primary" onClick={this.gaHanlder}>
          GA
        </button>
        <button className="btn btn-danger" onClick={this.gnHanlder}>
          GN
        </button>
      </div>
    );
  }
}

export default StateEx;

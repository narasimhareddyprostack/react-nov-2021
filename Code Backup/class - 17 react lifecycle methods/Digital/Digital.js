import React, { Component } from "react";

class Digital extends Component {
  constructor(props) {
    super(props);
    console.log("Constr- First");
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount = () => {
    console.log("third - component Didmount");
    setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
  };
  componentWillUpdate = () => {
    console.log("four - component - Willupdate");
  };
  componentWillUnmount = () => {
    console.log("Final - will Unmount");
  };
  render() {
    console.log("second - render method");
    return (
      <div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card header">
                  <h4>{this.state.currentTime}</h4>
                </div>
                <div class="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Digital;

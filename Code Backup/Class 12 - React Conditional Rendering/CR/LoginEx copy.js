import React, { Component } from "react";

class LoginEx extends Component {
  state = {
    isLoggin: false,
    message: "",
  };
  loginHanlder = () => {
    this.setState({ isLoggin: true, message: "Welcome to Pro Stack" });
  };
  logoutHanlder = () => {
    this.setState({ isLoggin: false, message: "All the Best" });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header"> Login Example</div>
                <div className="card-body">
                  {!this.state.isLoggin ? (
                    <>
                      <button
                        className="btn btn-success mr-5"
                        onClick={this.loginHanlder}
                      >
                        Login
                      </button>
                    </>
                  ) : null}
                  {this.state.isLoggin ? (
                    <>
                      <button
                        className="btn btn-danger"
                        onClick={this.logoutHanlder}
                      >
                        Logout
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
              <pre>{JSON.stringify(this.state)}</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginEx;

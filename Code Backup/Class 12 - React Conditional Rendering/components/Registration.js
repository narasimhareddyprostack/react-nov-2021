import React, { Component } from "react";

class Registration extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    mobile: "",
  };
  updateHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submitHanlder = (event) => {
    console.log(this.state);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-5">
              <form onSubmit={this.submitHanlder}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    onChange={this.updateHandler}
                    name="userName"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={this.updateHandler}
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    onChange={this.updateHandler}
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile"
                    onChange={this.updateHandler}
                    name="mobile"
                  />
                </div>
                <button className="btn btn-primary">Registration</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;

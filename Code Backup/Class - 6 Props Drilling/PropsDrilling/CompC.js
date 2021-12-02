import React, { Component } from "react";

class CompC extends Component {
  render() {
    return (
      <>
        <h1>Component C</h1>
        <hr />
        <pre>{JSON.stringify(this.props)}</pre>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img src={this.props.emp_Image} />
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.props.emp_Name}</li>
                    <li className="list-group-item">{this.props.emp_Sal}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CompC;

import React, { Component } from "react";

export class SMS extends Component {
  state = { count: 100 };
  remianingCount = (event) => {
    this.setState({ count: 100 - event.target.value.length });
  };
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h1>SMS Example</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-primary"> SMS Application</div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        onChange={this.remianingCount}
                      ></textarea>
                    </div>
                    <label>
                      Remaining Char's:<b>{this.state.count}</b>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SMS;

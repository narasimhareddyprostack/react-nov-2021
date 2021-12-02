import React, { Component } from "react";
import CompC from "./CompC";
class CompB extends Component {
  render() {
    return (
      <>
        <h1>Component B</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <hr />
        <CompC
          emp_Name={this.props.e_name}
          emp_Sal={this.props.e_sal}
          emp_Image={this.props.e_image}
        />
      </>
    );
  }
}

export default CompB;

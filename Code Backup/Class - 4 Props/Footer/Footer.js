import React from "react";
class Footer extends React.Component {
  render() {
    let { name, sal } = this.props;
    return (
      <div>
        <pramod>{JSON.stringify(this.props)}</pramod>
        <h4>Employee Name:{this.props.name}</h4>
        <h5>Emoloyee Salary:{this.props.sal}</h5>
        <h6>...............</h6>
        <h4>Employee Name:{name}</h4>
        <h5>Emoloyee Salary:{sal}</h5>
      </div>
    );
  }
}

export default Footer;

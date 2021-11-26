import React from "react";
class Layout extends React.Component {
  render() {
    return (
      <div>
        <h5>Layout Component</h5>
        <pre>{JSON.stringify(this.props)}</pre>
        <img src={this.props.employee.image} />
        <h5>Name:{this.props.employee.name}</h5>
        <h6>Name:{this.props.employee.sal}</h6>
      </div>
    );
  }
}
export default Layout;

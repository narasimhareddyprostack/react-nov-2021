import React, { Component } from "react";

class ContactDetails extends Component {
  render() {
    return (
      <div>
        <h1>Contact Details</h1>
        <pre>{JSON.stringify(this.props.selecteddata)}</pre>
        <div className="card">
          <div className="card-header">
            <img src={this.props.selecteddata.picture.large} alt="dummy" />
          </div>
          <div className="card-body">
            <h3>{this.props.selecteddata.name.last}</h3>
            <h3>{this.props.selecteddata.location.country}</h3>

            <h6>{this.props.selecteddata.email}</h6>
            <h3>{this.props.selecteddata.registered.age}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDetails;

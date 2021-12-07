import React, { Component } from "react";

class ContactList extends Component {
  render() {
    let { contacts } = this.props;
    return (
      <div>
        <h1>Contact List</h1>
        {/*  <pre>{JSON.stringify(this.props)}</pre> */}
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table table-hover">
                <thead className="table-dark bg-dark">
                  <td>Id</td>
                  <td>Name</td>
                  <td>City</td>
                </thead>
                <tbody>
                  {contacts.map((contact) => {
                    return (
                      <tr>
                        <td>{contact.login.uuid.substring(32)}</td>
                        <td>{contact.name.first}</td>
                        <td>{contact.location.city}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactList;

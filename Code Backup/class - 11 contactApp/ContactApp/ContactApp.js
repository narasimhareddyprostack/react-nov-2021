import React, { Component } from "react";
import Axios from "axios";
import ContactList from "./ContactList";
class ContactApp extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }
  componentDidMount = () => {
    Axios.get(
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
    )
      .then((response) => {
        console.log("Hi");
        console.log(response);
        this.setState({ contacts: response.data });
      })
      .catch();
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            {/*  <pre>{JSON.stringify(this.state.contacts)}</pre> */}
            <div className="col-md-8">
              <ContactList contacts={this.state.contacts} />
              {/*  Contact List - Component */}
            </div>
            <div className="col-md-4">{/*  Contact Details- Component */}</div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactApp;

import React from "react";
import Axios from "axios";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    console.log("First");
  }
  componentDidMount = () => {
    Axios.get(
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
    )
      .then(() => {})
      .catch(() => {});
    console.log("third - component Did mount");
  };
  /* componentWillUnmount = () => {
    console.log("Last - componet will Unmound");
  }; */
  render() {
    console.log("second");
    return (
      <div>
        <pre>{JSON.stringify(this.state.todos)}</pre>
      </div>
    );
  }
}

export default User;

import React from "react";
import Axios from "axios";
export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    console.log("First");
  }
  componentDidMount = () => {
    Axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch();
    console.log("third - component Did mount");
  };
  componentWillUnmount = () => {
    console.log("Last - componet will Unmound");
  };
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

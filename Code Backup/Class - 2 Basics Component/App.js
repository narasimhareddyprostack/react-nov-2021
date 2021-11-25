import React from "react";
import Header from "./Header/Header";
import Footer from './Footer/Footer'
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>App Class Component</h1>
        <Footer/>
      </div>
    );
  }
}
export default App;

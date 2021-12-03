import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
let App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
};
export default App;

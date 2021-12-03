import { Link } from "react-router-dom";
let Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/about">React All</Link>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Page</Link>
          <a href="http://www.infosys.com">InfoSys Link</a>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

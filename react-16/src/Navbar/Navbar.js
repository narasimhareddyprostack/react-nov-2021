import { Link } from "react-router-dom";
let Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="home">
          React Hooks Example
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="message">
                Message
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

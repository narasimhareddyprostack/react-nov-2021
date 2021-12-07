import { Link } from "react-router-dom";
let Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="home">
          React Routing - 6 V
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="stateex">
                State Ex
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="propsex">
                Props Ex
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="form">
                Form Handling
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="user">
                Dummy API
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

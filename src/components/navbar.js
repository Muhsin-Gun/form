import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Student Api</h2>
      <div className="links">
        <Link to="/">Login</Link>
        <Link to="/AddStudent">AddStudent</Link>
      </div>
    </nav>
  );
};

export default Navbar;
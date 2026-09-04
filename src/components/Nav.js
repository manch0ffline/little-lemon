import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="primary-nav" aria-label="Primary navigation">
      <ul className="nav-list">
        <li>
          <NavLink className="nav-link" end to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/reservations">Reservations</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/order-online">Order Online</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

import { NavLink } from "react-router";
import './Nav.css';

function Nav() {
  return (
    <>
      <nav className="pt-6 flex gap-16 justify-center">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/news" end>
          News
        </NavLink>
        <NavLink to="/about" end>
          About
        </NavLink>
      </nav>
    </>
  )
}

export default Nav

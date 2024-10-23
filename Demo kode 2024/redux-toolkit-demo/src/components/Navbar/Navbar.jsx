import "./Navbar.css";

import { login, logout } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  const navElements = [
    {
      name: "Home",
      route: ROUTES.ROOT,
    },
    {
      name: "Products",
      route: ROUTES.PRODUCTS,
    },
    {
      name: "Contact",
      route: ROUTES.CONTACT,
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href={ROUTES.ROOT} style={{ color: "white" }}>
          <h2>My logo</h2>
        </a>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        {navElements.map((navItem, index) => (
          <Link key={index} to={navItem.route}>
            {navItem.name}
          </Link>
        ))}
        {
          auth
          ? <button onClick={() => dispatch(logout())}>Log out</button>
          : <button onClick={() => dispatch(login())}>Log in</button>
        }
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;

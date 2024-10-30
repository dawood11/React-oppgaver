import "./Navbar.css";

import { login, logout } from "../../redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";

import { Link } from "react-router-dom";
import { NavElementsType } from './Navbar.types';
import { ROUTES } from "../../router/routes";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const auth = useAppSelector((state) => state.auth.value);
  const dispatch = useAppDispatch();

  const navElements: NavElementsType[] = [
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
        {navElements.map((navItem: NavElementsType, index) => (
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

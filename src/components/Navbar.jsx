import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <div className="menu-icon" onClick={() => setOpen(!open)}>
  <FaBars />
</div>

      <nav className={open ? "nav-links active" : "nav-links"}>
        <a href="#hero" onClick={() => setOpen(false)}>Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;
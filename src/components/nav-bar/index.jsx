import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import {NavLink } from "react-router-dom";
import "./styles.scss";

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "RESUME", to: "/resume" },
  { label: "CONTACT", to: "/contact" },
  { label: "SKILLS", to: "/skills" },
  { label: "PORTFOLIO", to: "/portfolio" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const menuRef = useRef();

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  // ✅ Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (toggleIcon && menuRef.current && !menuRef.current.contains(e.target)) {
        setToggleIcon(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [toggleIcon]);

  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      {/* Background Blur */}
      {toggleIcon && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={handleToggleIcon}
          style={{ zIndex: 9 }}
        />
      )}

      <nav className="navbar">
        <div className="navbar-container">
          <NavLink className="navbar-container-logo">
            <FaReact size={30} />
          </NavLink>
        </div>

        <ul
          ref={menuRef}
          className={`navbar-container-menu ${toggleIcon ? "active" : ""}`}
        >
          {data.map((item, key) => (
            <li key={key} className="navbar-container-menu-item">
              <NavLink
                className={({isActive})=>`navbar-container-menu-item-links ${isActive ? "active" : ""}`}
                style={{ color: "red", textDecoration: "none" }}
                to={item.to}
                onClick={() => setToggleIcon(false)} // ✅ close on link click
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
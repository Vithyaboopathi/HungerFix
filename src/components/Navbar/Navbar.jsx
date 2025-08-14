import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// Required Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(StoreContext);

  const totalItems = getTotalCartItems();
  return (
    <div className="navbar">
      <div className="logo-container">
        <h1 className="logo">HungerFix</h1>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for food..."
          className="search-bar"
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </div>
      <div className="nav-items">
        <ul>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Download App
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Contact Us
          </a>

          <Link
            to="/Cart"
            className="cart-icon-container "
            data-count={totalItems}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              className="cart-icon"
            />
          </Link>

          <button onClick={() => setShowLogin(true)} className="sign-in-btn">
            Sign in
          </button>
        </ul>
      </div>
      <button
        className="burger-icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} size="xl" />
      </button>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <Link
              to="/"
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </Link>
            <a
              href="#explore-menu"
              onClick={() => setMenu("menu")}
              className={menu === "menu" ? "active" : ""}
            >
              Menu
            </a>
            <a
              href="#app-download"
              onClick={() => setMenu("mobile-app")}
              className={menu === "mobile-app" ? "active" : ""}
            >
              Download App
            </a>
            <a
              href="#footer"
              onClick={() => setMenu("contact-us")}
              className={menu === "contact-us" ? "active" : ""}
            >
              Contact Us
            </a>
            <Link
              to="/Cart"
              className="cart-icon-container"
              data-count={totalItems}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                size="lg"
                className="cart-icon"
              />
            </Link>
            <button onClick={() => setShowLogin(true)} className="sign-in-btn">
              Sign in
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

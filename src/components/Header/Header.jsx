import React from "react";
import "./Header.css";
import headerImg from "../../assets/header_img.png";

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="header-contents">
        <h2>Hungry? Let’s Fix That.</h2>
        <p>
          From sizzling starters to mouthwatering mains and decadent desserts,
          our menu is crafted to delight every craving—made fresh, served fast,
          and always full of flavor.
        </p>
        <button className="header-btn">View Menu</button>
      </div>
    </div>
  );
};

export default Header;

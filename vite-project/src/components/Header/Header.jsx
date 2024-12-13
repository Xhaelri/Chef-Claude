import React from "react";
import "./Header.css";
import logo from "../../assets/chef-claude-icon.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="chef-claude" />
      <h1>Chef Claude</h1>
    </div>
  );
};

export default Header;

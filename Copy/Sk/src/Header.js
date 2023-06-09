
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo-left">
          <img src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-time-for-coffee-logo-design-png-image_6852251.png" alt="Left Logo" />
        </div>
        <h1 className="header-title " style={{fontFamily:"cursive"}}>COFFEE DRINKS</h1>
        <div className="logo-right">
          <img src="https://www.logomyway.com/logo-maker/SEOImages/coffee-shop-logos.png" alt="Right Logo" />
        </div>
      </header>
      <div className="gh">
        
      </div>
    </div>
  );
};

export default Header;
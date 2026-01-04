import React from 'react';
import './header.css';
function Header() {
    return (
      <header className="header">
      <div className='header-nav'>
        <img src="hexadeals-logo.png" alt="HexaDeals Logo" className='header-logo'/> 
        <h3 style={{paddingLeft:"5px"}}>HexaDeals</h3>
      </div>

        <div className="image-wrapper">
          <img src="header-bg.webp" alt="Hexadeals  - clay kitchen tava, pot" />
        <div className="overlay"></div>
        <div className="text-content">
          <h3>Comming Soon - New Service</h3>
        </div>
      </div>
      </header>
    );
}
export default Header;

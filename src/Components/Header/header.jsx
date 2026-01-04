import React from 'react';
import './header.css';
function Header() {
    return (
      <header className="header">
      <div className='header-nav'>
        <img src="hexadeals-logo.png" alt="HexaDeals Logo" className='header-logo'/> 
        <h3 style={{paddingLeft:"5px"}}>HexaDeals</h3>
      </div>

      <img src="header-bg.webp" alt="clay kitchen tava, port"
        className='header-img'/>
      </header>
    );
}
export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Navbar(){
  return (
    <header className={styles.nav}>
      <div className="container flex items-center justify-between">
        {/* logo / brand on left */}
        <Link to="/" className={styles.brand}>
          <img src="Icon-192.png" alt="HexaDeals" className={styles.logo} />
          <span>HexaDeals</span>
        </Link>

        {/* main links */}
        <nav className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
        </nav>

        {/* social icons */}
        <div className={styles.socials}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </header>
  );
}

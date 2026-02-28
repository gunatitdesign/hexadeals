import React from 'react';
import styles from './Footer.module.css';

export default function Footer(){
  return (
    <footer className={styles.root}>
      <div className="container">
        <p className="muted">© {new Date().getFullYear()} HexaDeals. All rights reserved.</p>
      </div>
    </footer>
  );
}

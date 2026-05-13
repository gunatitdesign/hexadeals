import React from 'react';
import styles from './Footer.module.css';
import { FOOTER_ADDRESS } from '../../utils/strings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
  return (
    <footer className={styles.root}>
      <div className="container">
          <p className='muted'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {FOOTER_ADDRESS}</p>
        <p className="muted">© {new Date().getFullYear()} HexaDeals. All rights reserved.</p>
      </div>
    </footer>
  );
}

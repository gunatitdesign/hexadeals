import React from "react";
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <p><FontAwesomeIcon icon="location-check" style={{color:"white"}}/> Himalaya society street 2, Umiya chowk, 150ft ring road, Rajkot</p>
      <p>&copy; 2026 HexaDeals. All rights reserved.</p>
    </footer>
  );
}
export default Footer;

import React from "react";
import "./floating-whatsapp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FloatingWhatsApp = () => {
  const phoneNumber = "918780497908"; // your WhatsApp number
  const message = "Hi, I am interested in your products";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} style={{color: "white",height:"30px",width:"30px"}}/>
    </a>
  );
};

export default FloatingWhatsApp;

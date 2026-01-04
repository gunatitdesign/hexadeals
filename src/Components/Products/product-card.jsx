import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function ProductCard({ product }) {
  const { name, description, price, image, whatsappLink, availability } = product;
  
  const openWhatsAppFallback = () => {
  const phone = "918780497908";
  const message = "Hi, I am interested in this product";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};

const openPrimaryLink = () => {
  const opened = window.open(product.whatsappLink, "_blank");

  setTimeout(() => {
    if (opened) {
      const confirmWhatsApp = window.confirm(
        "Unable to open link. Would you like to contact via WhatsApp?"
      );
      if (confirmWhatsApp) {
        openWhatsAppFallback();
      }
    }
  }, 2000);
};

  return (
    <div className="product-card">
      {product.image && product.image.length > 0 && (
        <img
          src={product.image[0]}
          alt={name}
          className="product-image"
        />
      )}
      <div className="product-content">
        <h3>{name}</h3>
        <p className="price">₹{price}<span className="actual-price">₹{product["actual-price"]}</span></p>
        <p className="description">{description}</p>
        <br></br>
        {availability.inStock ? (
          <a
            href={openPrimaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
           <span><FontAwesomeIcon icon={faWhatsapp} /></span> Buy on WhatsApp
          </a>
        ) : (
          <span className="out-of-stock">Out of Stock</span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;

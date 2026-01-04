import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function ProductCard({ product }) {
  const { name, description, price, image, whatsappLink, availability } = product;
  
  const openWhatsAppLink = () => {
  const appUrl = "whatsapp://send?phone=918780497908";

  // Try opening WhatsApp app
  window.location.href = appUrl;

  // Fallback to browser
  setTimeout(() => {
    window.open(product.whatsappLink, "_blank");
  }, 1500);
};

<button onClick={openWhatsAppLink}>
  Open WhatsApp
</button>

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
            href={openWhatsAppLink}
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

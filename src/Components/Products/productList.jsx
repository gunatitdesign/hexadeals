import React from "react";
import ProductCard from "./product-card";
import "./product.css";
import Products from "../../assets/product.json";

function ProductList() {

  return (
    <div>
      <div style={{textAlign: "center"}}>
      <h2 style={{marginBottom:'2px'}}>Top Products</h2>
      <p style={{marginTop:'2px',fontSize:'14px'}}>Check availability of our products and visit our address to purchase</p>
      </div>
      <div className="products-container">
        {Products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    
  );
}
export default ProductList;

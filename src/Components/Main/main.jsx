import React from "react";
import ProductList from "../Products/productList";
import ServiceSection from "../service-section/ServiceSection";

function Main() {
  return (
    <main>
      <ProductList />   
      <hr style={{color: "#f1f1",height: "0.5"}}></hr>
      <ServiceSection />
    </main>
  );
}
export default Main;

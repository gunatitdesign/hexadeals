import React from "react";
import './serviceSection.css';
import RapidoService from "./rapidoService";
import PhotographyService from "./photographyService";

function ServiceSection() {

    return (
    <div>
      <div style={{textAlign: "center"}}>
      <h2 style={{marginBottom:'2px'}}>Top Services</h2>
      <p style={{marginTop:'2px',fontSize:'14px'}}>Check availability of our services and message us in whatsapp</p>
      </div>
      <div className="service-container">
        <RapidoService />
        <PhotographyService />
      </div>
    </div>
    );
}
export default ServiceSection;

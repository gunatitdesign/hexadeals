import React from "react";
import "./rapidoService.css";

function RapidoService() {

    const openRapido = () => {
        const appScheme = "rapido://";
        const playStoreUrl = "https://play.google.com/store/apps/details?id=com.rapido.passenger";
        window.location.href = appScheme;
        setTimeout(() => {
            window.open(playStoreUrl, _blank)
        }, 1500);
    };

    return (
         <div className="rapido-card">
            <div>
                <h2 style={{marginBottom:'5px'}}>Rapido Service</h2>
                <p style={{marginTop:'5px'}}>Book Rider - We are available in Rajkot</p>
                <button className="rapido-card-button" onClick={openRapido} formTarget="_blank">Book Bike Ride</button>
            </div>
            <img src="rapido-rider.png" alt="Rapido ride" />
        </div>
    );
}
export default RapidoService;
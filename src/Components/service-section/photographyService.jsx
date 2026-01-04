import React from "react";
import './photographyService.css';

function PhotographyService() {
      const openInstagramProfile = () => {
        const username = "ravi.lakhtariya"; // replace with target user id
         const appUrl = `instagram://user?username=${username}`;
          const webUrl = `https://www.instagram.com/${username}/`;

        // Try opening Instagram app
        window.location.href = appUrl;

        // Fallback to browser if app not installed
        setTimeout(() => {
            window.open(webUrl, "_blank");
        }, 1500);
    };

    const openWhatsAppLink = () => {
        const appUrl = "whatsapp://send?phone=918780497908";
        // Try opening WhatsApp app
        window.location.href = appUrl;
        // Fallback to browser
        setTimeout(() => {
            window.open(appUrl, "_blank");
        }, 1500);
    };

    return (
         <div className="photography-card">
            <div className="photography-card-content">
                <h2 style={{marginBottom:'5px'}}>Photography Service</h2>
                <p style={{marginTop:'5px',marginBottom:'5px'}}>We are available in <strong>Rajkot</strong></p>
                <p style={{marginTop:'5px'}}><strong>Available:</strong> Saturday | Sunday </p>
                <span>
                    <button className="photography-card-button" onClick={openWhatsAppLink}>Book Service</button>
                    <button className="photography-card-button" onClick={openInstagramProfile}>Visit Portfolio</button>
                </span>
            </div>
            <img src="photography.png" alt="rapido book"/>
        
        </div>
    );
}
export default PhotographyService;
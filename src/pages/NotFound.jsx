import React from 'react';
import SEO from '../components/SEO';
import styles from './NotFound.module.css';

export default function NotFound(){
  return (
    <>
      <SEO 
        title="Page Not Found - 404 Error"
        description="The page you're looking for doesn't exist at HexaDeals. Browse our clay cookware and wellness services instead."
        url="/404"
      />
      <div className={`${styles.root} section`}>
        <div className="container">
          <h2>404 — Page not found</h2>
        </div>
      </div>
    </>
  );
}

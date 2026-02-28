import React from 'react';
import productData from '../../assets/product.json';
import styles from './ProductSection.module.css';

export default function ProductSection(){
  return (
    <section className={styles.root}>
      <div className="container">
        <h2>Shop Our Best Deals</h2>
        <div className={styles.grid}>
          {productData.map(p => (
            <div key={p.id} className={styles.card}>
              <img
                src={`${p.image[0]}`}
                alt={p.name}
                className={styles.img}
              />
              <h4>{p.name}</h4>
              <p>{p.description}</p>
              <p className="muted small">₹{p.price.toFixed(2)}{' '}
                {p['actual-price'] && (
                  <span className={styles.strike}>₹{p['actual-price'].toFixed(2)}</span>
                )}
              </p>
              <a
                href={p['whatsapp-link']}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsapp}
              >
                Buy on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

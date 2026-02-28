import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }){
  return (
    <article className={styles.card}>
      <Link to={`/products/${product.id}`} className={styles.link}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <div className={styles.body}>
          <h4 className={styles.title}>{product.title}</h4>
          <p className="muted">₹{product.price}</p>
        </div>
      </Link>
    </article>
  );
}

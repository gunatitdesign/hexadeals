import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import useSEO from '../hooks/useSEO';
import styles from './ProductDetail.module.css';

export default function ProductDetail(){
  const { id } = useParams();
  const product = products.find(p=> String(p.id) === String(id));
  useSEO({ title: product ? product.title : 'Product' });
  if(!product) return <div className="container section"><h2>Product not found</h2></div>;

  return (
    <div className={`${styles.root} section`}>
      <div className="container">
        <div style={{display:'flex',gap:24,flexWrap:'wrap'}}>
          <img src={product.image} alt={product.title} className={styles.image} />
          <div className={styles.info}>
            <h2>{product.title}</h2>
            <p className="muted">₹{product.price}</p>
            <p style={{marginTop:12}}>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

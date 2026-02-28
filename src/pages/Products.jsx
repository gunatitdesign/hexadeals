import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import useSEO from '../hooks/useSEO';
import styles from './Products.module.css';

export default function Products(){
  useSEO({ title: 'Products' });

  const search = new URLSearchParams(window.location.search);
  const category = search.get('category');
  const filtered = category ? products.filter(p => p.category === category) : products;

  return (
    <div className={`${styles.root} section`}>
      <div className="container">
        <h2 className={styles.title}>Products {category && `- ${category}`}</h2>
        <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',marginTop:16}}>
          {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}

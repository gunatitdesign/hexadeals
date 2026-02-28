import React from 'react';
import { categories } from '../data/categories';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import styles from './Categories.module.css';

export default function Categories(){
  useSEO({ title: 'Categories' });
  return (
    <div className={`${styles.root} section`}>
      <div className="container">
        <h2 className={styles.title}>Product Categories</h2>
        <div className="grid grid-cols-3" style={{marginTop:16}}>
          {categories.map(c=> (
            <Link key={c.id} to={`/products?category=${c.id}`} style={{textDecoration:'none'}}>
              <div style={{padding:16,background:'#fff',borderRadius:8, textAlign:'center'}}>
                <h4>{c.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

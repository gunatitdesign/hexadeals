import React from 'react';
import { categories } from '../data/categories';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import styles from './Categories.module.css';

export default function Categories(){
  return (
    <>
      <SEO 
        title="Product Categories - Clay Cookware Collection"
        description="Browse our clay cookware categories at HexaDeals. Find traditional clay pots, tawas, and utensils for healthy cooking."
        keywords="clay cookware categories, cookware types, clay pots, clay tawas, healthy cooking products"
        url="/categories"
        breadcrumbs={[{ label: 'Categories' }]}
      />
      <div className={`${styles.root} section`}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Categories' }]} />
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
    </>
  );
}

import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import SEO from '../components/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import styles from './Products.module.css';

export default function Products(){
  const search = new URLSearchParams(window.location.search);
  const category = search.get('category');
  const filtered = category ? products.filter(p => p.category === category) : products;

  const title = category ? `Clay Cookware - ${category.charAt(0).toUpperCase() + category.slice(1)}` : 'Premium Clay Cookware Collection';
  const description = category 
    ? `Explore our ${category} clay cookware collection at HexaDeals. Authentic, healthy cooking products made from premium clay.`
    : 'Discover our complete collection of authentic clay cookware at HexaDeals. Traditional clay pots, tawas, and utensils for healthy cooking.';

  return (
    <>
      <SEO 
        title={title}
        description={description}
        keywords="clay cookware, clay tawa, clay pots, healthy cooking, traditional cookware, HexaDeals"
        url={`/products${category ? `?category=${category}` : ''}`}
        breadcrumbs={category ? [
          { label: 'Categories', link: '/categories' },
          { label: category.charAt(0).toUpperCase() + category.slice(1) }
        ] : [
          { label: 'Products' }
        ]}
      />
      <div className={`${styles.root} section`}>
        <div className="container">
          <Breadcrumb items={category ? [
            { label: 'Categories', link: '/categories' },
            { label: category.charAt(0).toUpperCase() + category.slice(1) }
          ] : [
            { label: 'Products' }
          ]} />
          <h2 className={styles.title}>Products {category && `- ${category}`}</h2>
          <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',marginTop:16}}>
            {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </>
  );
}

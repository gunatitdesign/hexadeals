import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import SEO from '../components/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import styles from './ProductDetail.module.css';

export default function ProductDetail(){
  const { id } = useParams();
  const product = products.find(p=> String(p.id) === String(id));
  const baseUrl = 'https://gunatitdesign.github.io/hexadeals';
  
  if(!product) {
    return (
      <>
        <SEO 
          title="Product Not Found"
          description="The requested product could not be found at HexaDeals."
          url={`/products/${id}`}
        />
        <div className="container section"><h2>Product not found</h2></div>
      </>
    );
  }

  const title = `${product.title} - Premium Clay Cookware`;
  const description = `${product.description} Available at HexaDeals for ₹${product.price}. Authentic clay cookware for healthy cooking.`;
  const image = `/${product.image}`;

  const productStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.title,
      "description": product.description,
      "image": `${baseUrl}/${product.image}`,
      "sku": `HD-${product.id}`,
      "brand": {
        "@type": "Brand",
        "name": "HexaDeals"
      },
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "HexaDeals"
        }
      },
      "category": product.category,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      }
    }
  ];

  return (
    <>
      <SEO 
        title={title}
        description={description}
        keywords={`${product.title}, clay cookware, healthy cooking, HexaDeals, ${product.category}`}
        image={image}
        url={`/products/${id}`}
        type="product"
        structuredData={productStructuredData}
        breadcrumbs={[
          { label: 'Products', link: '/products' },
          { label: product.title }
        ]}
      />
      <div className={`${styles.root} section`}>
        <div className="container">
          <Breadcrumb items={[
            { label: 'Products', link: '/products' },
            { label: product.title }
          ]} />
          <div style={{display:'flex',gap:24,flexWrap:'wrap'}}>
            <img src={product.image} alt={product.title} className={styles.image} loading="lazy" />
            <div className={styles.info}>
              <h2>{product.title}</h2>
              <p className="muted">₹{product.price}</p>
              <p style={{marginTop:12}}>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

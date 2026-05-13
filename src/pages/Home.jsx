import React from 'react';
import Carousel from '../components/home-sections/Carousel';
import CategorySection from '../components/home-sections/CategorySection';
import ProductSection from '../components/home-sections/ProductSection';
import ServicesSection from '../components/home-sections/ServicesSection';
import DietSection from '../components/home-sections/DietSection';
import CreatorSection from '../components/home-sections/CreatorSection';
import SEO from '../components/SEO';
import styles from './Home.module.css';

export default function Home(){
  return (
    <>
      <SEO 
        title="Authentic Clay Cookware & Wellness Services"
        description="Discover premium clay cookware and personalized wellness services at HexaDeals. Healthy cooking with traditional clay pots, diet consultation, and creator content."
        keywords="clay cookware, clay tawa, wellness services, diet consultation, healthy cooking, traditional cookware"
        url="/"
      />
      <div className={styles.root}>
        <Carousel />
        
        <ProductSection />
        <ServicesSection />
        <DietSection />
        <CreatorSection />
      </div>
    </>
  );
}

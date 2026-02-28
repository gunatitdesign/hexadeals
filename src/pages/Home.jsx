import React from 'react';
import Carousel from '../components/home-sections/Carousel';
import CategorySection from '../components/home-sections/CategorySection';
import ProductSection from '../components/home-sections/ProductSection';
import ServicesSection from '../components/home-sections/ServicesSection';
import DietSection from '../components/home-sections/DietSection';
import CreatorSection from '../components/home-sections/CreatorSection';
import useSEO from '../hooks/useSEO';
import styles from './Home.module.css';

export default function Home(){
  useSEO({ title: 'Home', description: 'HexaDeals - authentic clay cookware and wellness services' });
  return (
    <div className={styles.root}>
      <Carousel />
      <CategorySection />
      <ProductSection />
      <ServicesSection />
      <DietSection />
      <CreatorSection />
    </div>
  );
}

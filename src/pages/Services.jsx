import React from 'react';
import useSEO from '../hooks/useSEO';
import ServicesSection from '../components/home-sections/ServicesSection';
import styles from './Services.module.css';

export default function Services(){
  useSEO({ title: 'Services' });
  return (
    <div className={styles.root}>
      <ServicesSection />
    </div>
  );
}

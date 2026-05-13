import React from 'react';
import SEO from '../components/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import ServicesSection from '../components/home-sections/ServicesSection';
import styles from './Services.module.css';

export default function Services(){
  return (
    <>
      <SEO 
        title="Wellness Services - Diet Consultation & Health Programs"
        description="Professional wellness services at HexaDeals including diet consultation, nutrition planning, and personalized health programs."
        keywords="diet consultation, wellness services, nutrition planning, health programs, dietitian services"
        url="/services"
        breadcrumbs={[{ label: 'Services' }]}
      />
      <div className={styles.root}>
        <Breadcrumb items={[{ label: 'Services' }]} />
        <ServicesSection />
      </div>
    </>
  );
}

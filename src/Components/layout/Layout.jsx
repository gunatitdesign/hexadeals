import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import InstallBanner from '../ui/InstallBanner';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';

export default function Layout({ children }){
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <InstallBanner />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

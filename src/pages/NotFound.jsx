import React from 'react';
import useSEO from '../hooks/useSEO';
import styles from './NotFound.module.css';

export default function NotFound(){
  useSEO({ title: 'Not Found' });
  return (
    <div className={`${styles.root} section`}>
      <div className="container">
        <h2>404 — Page not found</h2>
      </div>
    </div>
  );
}

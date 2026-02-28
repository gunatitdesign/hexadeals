import React from 'react';
import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, subtitle }){
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

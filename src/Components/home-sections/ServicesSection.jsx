import React from 'react';
import { services } from '../../data/services';
import SectionTitle from '../ui/SectionTitle';
import styles from './ServicesSection.module.css';

export default function ServicesSection(){
  return (
    <section className={`section ${styles.root}`}>
      <div className="container">
        <SectionTitle title="Our Services" subtitle="Expert services to support your journey" />
        <div className={styles.grid}>
          {services.map(s=> (
            <div key={s.id} className={styles.card}>
              {s.img && <img src={s.img} alt={s.title} className={styles.image} />}
              <h4>{s.title}</h4>
              <p className="muted small">{s.description}</p>
              {s.whatsapp && (
                <a
                  href={s.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsapp}
                >WhatsApp</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

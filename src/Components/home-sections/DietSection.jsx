import React from 'react';
import dietData from '../../assets/diet.json';
import profile from '../../assets/diet-profile.json';
import styles from './DietSection.module.css';
import ProfileInfoCard from './ProfileInfoCard';

export default function DietSection(){
  return (
    <section className={styles.root}>
      <div className='container'>
        <h3>Diet & Nutrition Videos</h3>
        <ProfileInfoCard {...profile} />
        <div className={styles.videoGrid}>
          {dietData.map(v => (
            <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
              <img src={v.thumbnail} alt={v.title} loading="lazy" />
              <p className="small">{v.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

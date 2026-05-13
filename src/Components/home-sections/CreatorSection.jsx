import React from 'react';
import shorts from '../../assets/shorts.json';
import profile from '../../assets/short-profile.json';
import styles from './CreatorSection.module.css';
import ProfileInfoCard from './ProfileInfoCard';
export default function CreatorSection(){
  return (
    <section className={styles.root}>
      <div className="container">
        <h3>Content Creator</h3>
        <br/>
        <ProfileInfoCard {...profile} />
        <div className={styles.videoGrid}>
          {shorts.map(v => (
            <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
              <img src={v.thumbnail} alt={v.title} />
              <p className="small">{v.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

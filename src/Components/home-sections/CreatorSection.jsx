import React from 'react';
import shorts from '../../assets/shorts.json';
import profile from '../../assets/short-profile.json';
import styles from './CreatorSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function CreatorSection(){
  return (
    <section className={styles.root}>
      <div className="container">
        <h3>Content Creator</h3>
        <br/>
        <div className={styles.profileCard}>
          <img src={profile.img} alt={profile.name} />
          <div>
            <h4>{profile.name}</h4>
            <p className="muted small">{profile.speciality}</p>
            <p className="small">{profile.description}</p>
            <div className={styles.profileLinks}>
              <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href={profile.youtubeUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href={`https://wa.me/918780497908?text=${encodeURIComponent('Hi, I am interested in your content creation')}`} target="_blank" rel="noopener noreferrer"
            ><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
          </div>
        </div>
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

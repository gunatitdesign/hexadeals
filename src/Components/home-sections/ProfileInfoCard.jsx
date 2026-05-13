import React from 'react';
import styles from './ProfileInfoCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube,faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function ProfileInfoCard(profile){
  return (
    <section className={styles.root}>
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
    </section>
  );
}

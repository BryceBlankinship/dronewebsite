import React from 'react';
import styles from './hero.module.css';
import video from './assets/hero.mp4';

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroVideo}>
        <video src={video} autoPlay muted loop></video>
      </div>
      <div className={styles.heroHeader}>
        <h1>Cinematix</h1>
        <h3>Commercial Cinematography</h3>
      </div>
    </div>
  );
}
import React from 'react';
import styles from './Footer.module.css';
import Contact from '../components/Contact';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import logo from '../assets/logos/solo-grey.png';
import Pallurat from '../assets/images/pallurat-2.png';

const footer = props => (
  <div className={styles.Footer}>
    <img
      alt="Sologrey Illustration"
      src={Pallurat}
      className={styles.BallOne}
    />
    <div className={styles.LeftColumn}>
      <h2>Sologrey Agency</h2>
      <h3 style={{ whiteSpace: 'nowrap' }}>
        Aitoja asioita, mahtavia tarinoita!
      </h3>
      <Contact />
      <p style={{ marginTop: '30px' }}>(1.10. alkaen)</p>
      <p>Laivavarustajankatu 2 D LH6</p>
      <p>00140 Helsinki</p>
      <p>Finland</p>
      <p>info@sologrey.fi</p>
      <p style={{ marginTop: '30px' }}>Y-tunnus: 2344952-1</p>
    </div>
    <div className={styles.RightColumn}>
      <div className={styles.Links}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.emeco.net/"
        >
          Emeco
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.blastation.com/"
        >
          Blå Station
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.lapalma.it/en"
        >
          Lapalma
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sancal.com/en/"
        >
          Sancal
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.rex-kralj.com/"
        >
          Rex Kralj
        </a>
      </div>
      <div className={styles.SocialMedia}>
        <div className={styles.SocialItem}>
          <img alt="Facebook Icon" src={Facebook} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://fi-fi.facebook.com/SologreyOy/"
          >
            facebook
          </a>
        </div>
        <div className={styles.SocialItem}>
          <img alt="Instagram Icon" src={Instagram} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/sologrey.fi/"
          >
            instagram
          </a>
        </div>
      </div>
    </div>

    <img alt="Sologrey logo" src={logo} className={styles.Logo} />
  </div>
);
export default footer;

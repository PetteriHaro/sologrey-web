import React from 'react';
import styles from './Sancal.module.css';
import CompanyInfo from './CompanyInfo';
import Logo from '../assets/logos/sancal.png';
import Sancal1 from '../assets/images/sancal/sancal-1.jpg';
import Sancal2 from '../assets/images/sancal/sancal-2.jpg';
import Sancal3 from '../assets/images/sancal/sancal-3.jpg';
import Sancal4 from '../assets/images/sancal/sancal-4.jpg';
import Sancal5 from '../assets/images/sancal/sancal-5.jpg';
import Sancal6 from '../assets/images/sancal/sancal-6.jpg';
import Tuoli from '../assets/images/tuolit-1.png';
import Pallurat from '../assets/images/pallurat-2.png';

const sancal = props => (
  <div className={styles.Sancal}>
    <img alt="Sologrey Illustration" src={Tuoli} className={styles.Chair} />
    <img
      alt="Sologrey Illustration"
      src={Pallurat}
      className={styles.BallOne}
    />
    <div className={styles.Grid}>
      <div className={styles.VerticalContainer}>
        <div className={styles.VerticalImage}>
          <img alt="Sancal" src={Sancal2} />
        </div>
        <div className={styles.CompanyInfo}>
          <CompanyInfo
            imageSource={Logo}
            link="https://sancal.com/en/"
            website="sancal.com"
            maxWidth="200px"
            sancal
            text="Syntynyt espanjalaisen auringon alla. Tehdas
            sijaitsee Murciassa, vuoriston kätkössä, missä
            sähkökin tuotetaan itse tehtaan tarpeisiin."
            altText="Mallisto ilmentää hyvin espanjalaista
            identiteettiä; intohimoinen, avoin, riemukas,
            nöyrä. Muodoilla ja materiaaleilla leikittely
            sekä rakkaus luontoon ovat luoneet yhden
            kiinnostavimmista mallistoista. Rakkaus ja
            huumori ovat hauskanpidon salaisia ainesosia;
            jokainen tuote on tämän perheyrityksen
            rakkauden työ, kaukana perinteisestä."
          />
        </div>
      </div>
      <div className={styles.LargeContainer}>
        <div className={styles.TopRow}>
          <div className={styles.TopRowLarge}>
            <img src={Sancal6} alt="Sancal" />
          </div>
          <div className={styles.TopRowSmall}>
            <img src={Sancal5} alt="Sancal" />
          </div>
        </div>
        <div className={styles.BottomRow}>
          <div className={styles.BottoRowImg}>
            <img src={Sancal4} alt="Sancal" />
          </div>
          <div className={styles.BottoRowImg}>
            <img src={Sancal1} alt="Sancal" />
          </div>
          <div className={styles.BottoRowImg}>
            <img src={Sancal3} alt="Sancal" />
          </div>
        </div>
      </div>
    </div>

    <img src={Logo} className={styles.TopLogo} alt="Sancal Logo" />
    <div className={styles.MobileGrid}>
      <div className={styles.TopImage}>
        <img src={Sancal6} alt="Sancal" style={{ objectFit: 'cover' }} />
      </div>

      <div
        style={{
          display: 'flex',
          height: '59%',
          justifyContent: 'space-between',
        }}
      >
        <div className={styles.LeftColumn}>
          <div className={styles.LeftImage}>
            <img src={Sancal4} alt="Sancal" />
          </div>
          <div className={styles.LeftImage}>
            <img src={Sancal1} alt="Sancal" />
          </div>
          <div className={styles.LeftImage}>
            <img src={Sancal3} alt="Sancal" />
          </div>
        </div>
        <div className={styles.RightColumn}>
          <div className={styles.RightImage}>
            <img src={Sancal5} alt="Sancal" />
          </div>
          <div className={styles.RightImage}>
            <img src={Sancal2} alt="Sancal" />
          </div>
        </div>
      </div>
    </div>

    <div className={styles.MobileText}>
      <p>
        Syntynyt espanjalaisen auringon alla. Tehdas sijaitsee Murciassa,
        vuoriston kätkössä, missä sähkökin tuotetaan itse tehtaan tarpeisiin.
      </p>
      <p style={{ marginBottom: '0' }}>
        Mallisto ilmentää hyvin espanjalaista identiteettiä; intohimoinen,
        avoin, riemukas, nöyrä. Muodoilla ja materiaaleilla leikittely sekä
        rakkaus luontoon ovat luoneet yhden kiinnostavimmista mallistoista.
        Rakkaus ja huumori ovat hauskanpidon salaisia ainesosia; jokainen tuote
        on tämän perheyrityksen rakkauden työ, kaukana perinteisestä.
      </p>
      <a style={{ fontWeight: '600' }} href="https://sancal.com/en/">
        sancal.com
      </a>
    </div>
  </div>
);

export default sancal;

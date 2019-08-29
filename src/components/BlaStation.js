import React from 'react';
import styles from './BlaStation.module.css';
import BlaStation1 from '../assets/images/blastation/blastation-1.jpeg';
import BlaStation2 from '../assets/images/blastation/blastation-2.jpeg';
import BlaStation3 from '../assets/images/blastation/blastation-3.jpeg';
import BlaStation4 from '../assets/images/blastation/blastation-4.png';
import BlaStation5 from '../assets/images/blastation/blastation-5.jpg';
import Logo from '../assets/logos/bla-station.png';
import CompanyInfo from './CompanyInfo';
import Tuoli from '../assets/images/tuolit-1.png';
import Pallurat from '../assets/images/pallurat-2.png';

const blaStation = props => (
  <div className={styles.BlaStation}>
    <img alt="Sologrey Illustration" src={Tuoli} className={styles.Chair} />
    <img
      alt="Sologrey Illustration"
      src={Pallurat}
      className={styles.BallOne}
    />
    <div className={styles.Grid}>
      <div className={styles.LargeContainer}>
        <div className={styles.TopRow}>
          <div className={styles.LargeTopRowImage}>
            <img alt="Blå Station" src={BlaStation1} />
          </div>
          <div className={styles.SmallTopRowImage}>
            <img alt="Blå Station" src={BlaStation2} />
          </div>
        </div>
        <div className={styles.BottomRow}>
          <div className={styles.BottoRowLarge}>
            <div className={styles.SmallImageCont}>
              <img alt="Blå Station" src={BlaStation3} />
            </div>
            <div className={styles.CompanyInfo}>
              <CompanyInfo
                imageSource={Logo}
                link="http://www.blastation.com/"
                website="blastation.com"
                text="Innovatiivinen ruotsalainen perheyritys,
                jossa kokeilunhalu sekä avoin ja utelias mieli
                saa aikaan näyttäviä, edellä aikaansa olevia
                uniikkeja ja ennakkoluulottomia tuotteita.
                Kaikki tuotetaan meitä lähellä, jokaiselle
                tuotteelle valitaan paras mahdollinen
                valmistaja ja koko tuotantoketjun ajan
                seurataan kestävän kehityksen kriteerejä."
              />
            </div>
          </div>
          <div className={styles.SmallTopRowImage}>
            <img alt="Blå Station" src={BlaStation4} />
          </div>
        </div>
      </div>

      <div className={styles.VerticalPictureContainer}>
        <img
          src={BlaStation5}
          alt="Blå Station"
          className={styles.VerticalImage}
        />
      </div>
    </div>

    <img src={Logo} className={styles.TopLogo} alt="Blå Station Logo" />
    <div className={styles.MobileGrid}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          height: '99%',
          justifyContent: 'space-between',
        }}
      >
        <div className={styles.LeftColumn}>
          <div className={styles.LeftTopImage}>
            <img src={BlaStation2} alt="Blå Station" />
          </div>
          <div className={styles.LeftTopImage}>
            <img src={BlaStation4} alt="Blå Station" />
          </div>
          <div className={styles.LeftBottomImage}>
            <img
              src={BlaStation3}
              alt="Blå Station"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <div className={styles.RightColumn}>
          <div className={styles.RightTopImage}>
            <img src={BlaStation5} alt="Blå Station" />
          </div>
        </div>
      </div>

      <div className={styles.BottomImage}>
        <img src={BlaStation1} alt="Blå Station" />
      </div>
    </div>

    <div className={styles.MobileText}>
      <p style={{ marginBottom: '0' }}>
        Innovatiivinen ruotsalainen perheyritys, jossa kokeilunhalu sekä avoin
        ja utelias mieli saa aikaan näyttäviä, edellä aikaansa olevia uniikkeja
        ja ennakkoluulottomia tuotteita. Kaikki tuotetaan meitä lähellä,
        jokaiselle tuotteelle valitaan paras mahdollinen valmistaja ja koko
        tuotantoketjun ajan seurataan kestävän kehityksen kriteerejä.
      </p>
      <a style={{ fontWeight: '600' }} href="http://www.blastation.com/">
        blastation.com
      </a>
    </div>
  </div>
);

export default blaStation;

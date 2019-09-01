import React from 'react';
import styles from './Emeco.module.css';
import Lapalma1 from '../assets/images/lapalma/lapalma-1.jpg';
import Lapalma2 from '../assets/images/lapalma/lapalma-2.jpg';
import Lapalma3 from '../assets/images/lapalma/lapalma-3.jpg';
import Lapalma4 from '../assets/images/lapalma/lapalma-4.jpg';
import Lapalma5 from '../assets/images/lapalma/lapalma-5.png';
import Logo from '../assets/logos/lapalma.png';
import CompanyInfo from './CompanyInfo';

const lapalma = props => (
  <div className={styles.Emeco}>
    <div className={styles.Grid}>
      <div
        className={styles.VerticalPictureContainer}
        style={{ overflow: 'hidden' }}
      >
        <img
          src={Lapalma5}
          alt="Lapalma"
          className={styles.VerticalPicture}
          style={{ marginLeft: '-20%', height: '80%', marginTop: '30%' }}
        />
      </div>
      <div className={styles.TwoItemContainer}>
        <div className={styles.TopSmallImageContainer}>
          <img
            src={Lapalma1}
            alt="Lapalma"
            style={{ objectFit: 'contain', transform: 'scale(0.8)' }}
          />
        </div>
        <div className={styles.BottomSmallImageContainer}>
          <img src={Lapalma4} alt="Lapalma" />
        </div>
      </div>
      <div className={styles.TwoItemContainer}>
        <div className={styles.TopSmallImageContainer}>
          <img src={Lapalma3} alt="Lapalma" />
        </div>
        <div
          className={styles.BottomSmallImageContainer}
          style={{ backgroundColor: 'transparent' }}
        >
          <CompanyInfo
            imageSource={Logo}
            link="https://www.lapalma.it/en"
            website="lapalma.it"
            text="Kaikki alkoi autotallissa Italian
            Codoneghessa, missä jokainen Lapalman
            tuote valmistetaan edelleen omassa
            modernissa tehtaassa, lähituotantona.
            Veljesten rakkaus tekniikkaan, tarkkuuteen
            sekä materiaaleihin yhdistettynä
            päättäväisyyteen ovat luoneet mallistosta
            minimalististen tuotteiden järjestelmän,
            joka on toimiva kaikissa ympäristöissä."
          />
        </div>
      </div>

      <div
        className={styles.VerticalPictureContainer}
        style={{ overflow: 'hidden' }}
      >
        <img
          src={Lapalma2}
          alt="Lapalma"
          className={styles.VerticalPicture}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>

    <img src={Logo} className={styles.TopLogo} alt="Lapalma Logo" />
    <div className={styles.MobileGrid}>
      <div className={styles.LeftColumn} style={{ width: '38%' }}>
        <div className={styles.RightTopImage} style={{ height: '46%' }}>
          <img
            src={Lapalma5}
            alt="Lapalma"
            style={{
              objectFit: 'cover',
              marginTop: '10%',
            }}
          />
        </div>
        <div className={styles.RightSmallImage} style={{ height: '25%' }}>
          <img
            src={Lapalma1}
            alt="Lapalma"
            style={{ transform: 'scale(0.7)' }}
          />
        </div>
        <div className={styles.RightSmallImage} style={{ height: '25%' }}>
          <img src={Lapalma4} alt="Lapalma" style={{ objectFit: 'cover' }} />
        </div>
      </div>
      <div className={styles.RightColumn} style={{ width: '60%' }}>
        <div className={styles.LeftTopImage}>
          <img src={Lapalma2} alt="Lapalma" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.LeftBottomImage}>
          <img src={Lapalma3} alt="Lapalma" style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>

    <div className={styles.MobileText}>
      <p style={{ marginBottom: '0' }}>
        Kaikki alkoi autotallissa Italian Codoneghessa, missä jokainen Lapalman
        tuote valmistetaan edelleen omassa modernissa tehtaassa, lähituotantona.
        Veljesten rakkaus tekniikkaan, tarkkuuteen sekä materiaaleihin
        yhdistettynä päättäväisyyteen ovat luoneet mallistosta minimalististen
        tuotteiden järjestelmän, joka on toimiva kaikissa ympäristöissä.
      </p>
      <a style={{ fontWeight: '600' }} href="https://www.lapalma.it/en">
        lapalma.it
      </a>
    </div>
  </div>
);

export default lapalma;

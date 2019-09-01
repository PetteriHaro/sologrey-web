import React from 'react';
import styles from './Emeco.module.css';
import Emeco1 from '../assets/images/emeco/emeco-1.jpg';
import Emeco2 from '../assets/images/emeco/emeco-2.jpg';
import Emeco3 from '../assets/images/emeco/emeco-3.jpg';
import Emeco4 from '../assets/images/emeco/emeco-4.jpg';
import Emeco5 from '../assets/images/emeco/emeco-5.jpg';
import Logo from '../assets/logos/emeco-logo.png';
import CompanyInfo from './CompanyInfo';
import Pallurat from '../assets/images/pallurat-1.png';
import Palluratt from '../assets/images/pallurat-2.png';

const emeco = props => (
  <div className={styles.Emeco}>
    <img
      alt="Sologrey Illustration"
      src={Pallurat}
      className={styles.BallOne}
    />
    <img
      alt="Sologrey Illustration"
      src={Palluratt}
      className={styles.BallThree}
    />

    <div className={styles.Grid}>
      <div className={styles.VerticalPictureContainer}>
        <img src={Emeco5} alt="Emeco" className={styles.VerticalPicture} />
      </div>
      <div className={styles.TwoItemContainer}>
        <div className={styles.TopSmallImageContainer}>
          <img src={Emeco3} alt="Emeco" style={{ objectFit: 'contain' }} />
        </div>
        <div className={styles.BottomSmallImageContainer}>
          <img src={Emeco2} alt="Emeco" />
        </div>
      </div>
      <div className={styles.TwoItemContainer}>
        <div className={styles.TopSmallImageContainer}>
          <img src={Emeco4} alt="Emeco" />
        </div>
        <div
          className={styles.BottomSmallImageContainer}
          style={{ backgroundColor: 'transparent' }}
        >
          <CompanyInfo
            imageSource={Logo}
            link="https://www.emeco.net/"
            website="emeco.net"
            text="USA:n laivaston käyttöön vuonna 1944
            suunniteltu, edelleen tuotannossa oleva
            ikoninen Navy tuoli on luonut pohjan
            Emecolle. Yrityksen pääajatuksena on
            edelleen tehdä todella laadukkaita tuoleja,
            yleensä käsin ja enimmäkseen kierrätetyistä
            materiaaleista, jotka kestävät sekä käyttöä
            että aikaa."
            altText="Kestävä kehitys toteutuu Emecolla kaikessa
            toiminnassa. Kierrätettyjen materiaalit
            kirjo on laaja. Se, mikä on meille roskaa, voi
            muuttua Emecolla esimerkiksi vastuulliseksi
            ja erittäin mukavaksi tuoliksi."
          />
        </div>
      </div>

      <div
        className={styles.VerticalPictureContainer}
        style={{ overflow: 'hidden' }}
      >
        <img
          src={Emeco1}
          alt="Emeco"
          className={styles.VerticalPicture}
          style={{ objectFit: 'cover', marginLeft: '40%' }}
        />
      </div>
    </div>

    <img src={Logo} className={styles.TopLogo} alt="Emeco Logo" />
    <div className={styles.MobileGrid}>
      <div className={styles.LeftColumn}>
        <div className={styles.LeftTopImage}>
          <img src={Emeco5} alt="Emeco" />
        </div>
        <div className={styles.LeftBottomImage}>
          <img src={Emeco2} alt="Emeco" />
        </div>
      </div>
      <div className={styles.RightColumn}>
        <div className={styles.RightTopImage}>
          <img
            src={Emeco1}
            alt="Emeco"
            style={{ objectFit: 'cover', marginLeft: '50%' }}
          />
        </div>
        <div className={styles.RightSmallImage}>
          <img src={Emeco4} alt="Emeco" />
        </div>
        <div className={styles.RightSmallImage}>
          <img src={Emeco3} alt="Emeco" />
        </div>
      </div>
    </div>

    <div className={styles.MobileText}>
      <p>
        USA:n laivaston käyttöön vuonna 1944 suunniteltu, edelleen tuotannossa
        oleva ikoninen Navy tuoli on luonut pohjan Emecolle. Yrityksen
        pääajatuksena on edelleen tehdä todella laadukkaita tuoleja, yleensä
        käsin ja enimmäkseen kierrätetyistä materiaaleista, jotka kestävät sekä
        käyttöä että aikaa.
      </p>
      <p style={{ marginBottom: '0' }}>
        Kestävä kehitys toteutuu Emecolla kaikessa toiminnassa. Kierrätettyjen
        materiaalit kirjo on laaja. Se, mikä on meille roskaa, voi muuttua
        Emecolla esimerkiksi vastuulliseksi ja erittäin mukavaksi tuoliksi.
      </p>
      <a style={{ fontWeight: '600' }} href="https://www.emeco.net/">
        emeco.net
      </a>
    </div>
  </div>
);

export default emeco;

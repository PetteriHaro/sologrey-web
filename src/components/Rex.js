import React from 'react';
import styles from './Rex.module.css';
import CompanyInfo from './CompanyInfo';
import Logo from '../assets/logos/rex.png';
import Rex1 from '../assets/images/rex/rex-1.png';
import Rex2 from '../assets/images/rex/rex-2.jpg';
import Rex3 from '../assets/images/rex/rex-3.jpg';
import Rex4 from '../assets/images/rex/rex-4.png';
import Tuoli from '../assets/images/tuolit-1.png';
import Pallurat from '../assets/images/pallurat-2.png';

class Rex extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const top = document.getElementById('rexdiv').offsetTop;
      this.props.setDistance(window.innerWidth > 800 ? top - 20 : top, 'rex');
    }, 1000);
  }
  render() {
    return (
      <div id="rexdiv" className={styles.Rex}>
        <img alt="Sologrey Illustration" src={Tuoli} className={styles.Chair} />
        <img
          alt="Sologrey Illustration"
          src={Pallurat}
          className={styles.BallOne}
        />
        <div className={styles.Grid}>
          <div className={styles.VerticalContainer}>
            <img alt="Rex Kralj" src={Rex2} />
          </div>
          <div className={styles.VerticalDouble}>
            <div className={styles.SmallImage}>
              <img alt="Rex Kralj" src={Rex1} />
            </div>
            <div className={styles.CompanyInfo}>
              <CompanyInfo
                imageSource={Logo}
                sancal
                maxWidth="200px"
                link="http://www.rex-kralj.com/"
                website="rex-kralj.com"
                text="Slovenialaisen arkkitehdin Niko Kraljin
            suunnittelemat kalusteet ovat saaneet
            nähdä uuden päivänvalon, kun kaksi
            kaverusta tunsi näiden ikonisten tuotteiden
            vetovoiman ja he päättivät tuoda klassisen
            malliston nykypäivään uuden yleisön
            nähtäväksi."
                altText="Niko Kraljin nimissä on rekisteröity yli 120
            patenttia ja mallia. Historiaa tutkimalla on
            löydetty Rex ja Shell tuoteperheet sekä
            Mosquito, 1960 ja CC sekä 4455 tuolimallit,
            jotka ovat edelleen ajattoman esteettisiä
            ja yksityiskohdiltaan erottuvia."
                altTextTwo="2020 uudistuneen brändi-ilmeen sekä uusien tuotteiden myötä
            mallisto on päivitetty tähän päivään täydellisesti sopivaksi."
              />
            </div>
          </div>
          <div className={styles.VerticalContainer}>
            <img alt="Rex Kralj" src={Rex4} style={{ objectFit: 'contain' }} />
          </div>
          <div className={styles.VerticalContainer}>
            <img alt="Rex Kralj" src={Rex3} />
          </div>
        </div>

        <img src={Logo} className={styles.TopLogo} alt="Rex Kralj Logo" />
        <div className={styles.MobileGrid}>
          <div className={styles.LeftColumn}>
            <div className={styles.LeftImageTop}>
              <img src={Rex2} alt="Rex Kralj" />
            </div>
            <div className={styles.LeftImageBottom}>
              <img src={Rex1} alt="Rex Kralj" />
            </div>
          </div>
          <div className={styles.RightColumn}>
            <div className={styles.RightImage}>
              <img
                src={Rex4}
                alt="Rex Kralj"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.RightImage}>
              <img src={Rex3} alt="Rex Kralj" />
            </div>
          </div>
        </div>

        <div className={styles.MobileText}>
          <p>
            Slovenialaisen arkkitehdin Niko Kraljin suunnittelemat kalusteet
            ovat saaneet nähdä uuden päivänvalon, kun kaksi kaverusta tunsi
            näiden ikonisten tuotteiden vetovoiman ja he päättivät tuoda
            klassisen malliston nykypäivään uuden yleisön nähtäväksi.
          </p>
          <p style={{ marginBottom: '0' }}>
            Niko Kraljin nimissä on rekisteröity yli 120 patenttia ja mallia.
            Historiaa tutkimalla on löydetty Rex ja Shell tuoteperheet sekä
            Mosquito, 1960 ja CC sekä 4455 tuolimallit, jotka ovat edelleen
            ajattoman esteettisiä ja yksityiskohdiltaan erottuvia.
            <br />
            <br />
            2020 uudistuneen brändi-ilmeen sekä uusien tuotteiden myötä mallisto
            on päivitetty tähän päivään täydellisesti sopivaksi.
          </p>
          <a style={{ fontWeight: '600' }} href="http://www.rex-kralj.com/">
            rex-kralj.com
          </a>
        </div>
      </div>
    );
  }
}

export default Rex;

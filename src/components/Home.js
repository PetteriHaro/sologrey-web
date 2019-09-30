import React from 'react';
import styles from './Home.module.css';
import Contact from './Contact';
import Emeco from '../assets/logos/emeco-logo.png';
import Sologrey from '../assets/logos/solo-grey.png';
import BlaStation from '../assets/logos/bla-station.png';
import Sancal from '../assets/logos/sancal.png';
import Rex from '../assets/logos/rex.png';
import Lapalma from '../assets/logos/lapalma.png';
import Tuoli from '../assets/images/tuolit-1.png';
import Pallurat from '../assets/images/pallurat-2.png';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.Home}>
        <img className={styles.MainLogo} src={Sologrey} alt="Sologrey Logo" />
        <img alt="Sologrey Illustration" src={Tuoli} className={styles.Chair} />
        <img
          alt="Sologrey Illustration"
          src={Pallurat}
          className={styles.BallOne}
        />
        <img
          alt="Sologrey Illustration"
          src={Pallurat}
          className={styles.BallTwo}
        />
        <div className={styles.TextContainer}>
          <h1>Aitoja asioita,</h1>
          <h1>mahtavia tarinoita!</h1>
          <p style={{ textAlign: 'left' }}>
            SOLOGREY AGENCY toimii laadukkaiden, tarkkaan valikoitujen
            kalustevalmistajien edustajana suomessa. Olemme valinneet brändeiksi
            mielenkiintoisen ja laajan kattauksen tämän hetken parhaista
            merkeistä. Olkoon brändimme isoja tai pieniä, kaikki ovat
            perheyrityksiä, joiden tekemisessä on sydäntä ja joilla on oma
            tarinansa. Tavoitteenamme on tarjota teille aitoja asioita.
          </p>
          <p style={{ textAlign: 'left' }}>
            Toivomme että jokainen projektikalustamisen ammattilainen voi luoda
            myös omille asiakkailleen uusia yritysten menestystarinoita
            mahdollistavia tiloja niin toimisto-, koulutus- ravintola-, kuin
            hotelliympäristöihin. Teemme merkkien eteen markkinointi- ja
            arkkitehtityötä. Myynti tapahtuu jälleenmyyjien kautta.
          </p>
          <h3>Näihin me uskomme, olkaa hyvä!</h3>
          <Contact />
        </div>
        <div className={styles.LogoBanner}>
          <div>
            <img
              src={Emeco}
              alt="Emeco logo"
              className={styles.Emeco}
              onClick={() => this.props.scrollToSection('emeco')}
            />
            <img
              src={BlaStation}
              alt="Blå Station Logo"
              className={styles.BlaStation}
              onClick={() => this.props.scrollToSection('blastation')}
            />
            <img
              src={Lapalma}
              alt="Lapalma Logo"
              className={styles.Lapalma}
              onClick={() => this.props.scrollToSection('lapalma')}
            />
            <img
              src={Sancal}
              alt="Sancal logo"
              className={styles.Sancal}
              onClick={() => this.props.scrollToSection('sancal')}
            />
            <img
              src={Rex}
              alt="Rex-Kralj Logo"
              className={styles.Rex}
              onClick={() => this.props.scrollToSection('rex')}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

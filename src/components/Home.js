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

const home = props => (
  <div className={styles.Home}>
    <div className={styles.TextContainer}>
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
      <img className={styles.MainLogo} src={Sologrey} alt="Sologrey Logo" />
      <h1>Aitoja asioita,</h1>
      <h1>mahtavia tarinoita!</h1>
      <p style={{ textAlign: 'left' }}>
        SOLOGREY AGENCY toimii laadukkaiden, tarkkaan valikoitujen
        kalustevalmistajien edustajana suomessa. Olemme valinneet brändeiksi
        mielenkiintoisen ja laajan kattauksen tämän hetken parhaista merkeistä.
        Olkoon brändimme isoja tai pieniä, kaikki ovat perheyrityksiä, joiden
        tekemisessä on sydäntä ja joilla on oma tarinansa. Tavoitteenamme on
        tarjota teille aitoja asioita.
      </p>
      <p style={{ textAlign: 'left' }}>
        Toivomme että jokainen projektikalustamisen ammattilainen voi luoda myös
        omille asiakkailleen uusia yritysten menestystarinoita mahdollistavia
        tiloja niin toimisto-, koulutus- ravintola-, kuin hotelliympäristöihin.
        Teemme merkkien eteen markkinointi- ja arkkitehtityötä. Myynti tapahtuu
        valikoitujen jälleenmyyjien kautta.
      </p>
      <h3>Näihin me uskomme, olkaa hyvä!</h3>
      <Contact />
    </div>
    <div className={styles.LogoBanner}>
      <div>
        <img src={Emeco} alt="Emeco logo" />
        <img src={BlaStation} alt="Blå Station Logo" />
        <img src={Lapalma} alt="Lapalma Logo" />
        <img src={Sancal} alt="Sancal logo" />
        <img src={Rex} alt="Rex-Kralj Logo" />
      </div>
    </div>
  </div>
);

export default home;

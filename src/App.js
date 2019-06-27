import React from 'react';
import styles from './App.module.css';
import Background from './assets/images/sologrey-taustakuva.png';
import Logo from './assets/images/sologrey-logo.png'
import Tree from './components/tree';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.ImageContainer}>
        <img src={Background} className={styles.Background} alt="Sologrey Under Construction" />
      </div>
      <Tree />
      <div className={styles.UnderConstruction}>
        <h1>UNDER CONSTRUCTION</h1>
      </div>
      <div className={styles.TopLeftContainer}>
        <img src={Logo} className={styles.Logo} alt="Sologrey Logo" />
        <h3>It’s time to take a breath and create a new start for the fall.</h3>
      </div>
      <div className={styles.BottomRightContainer}>
        <h3>CONTACT</h3>
        <p>Miia Kylmänen</p>
        <p>miia@sologrey.fi</p>
        <p>+358 (0) 500 611 722</p>
      </div>
    </div>
  );
}

export default App;

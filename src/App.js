import React from 'react';
import styles from './App.module.css';
import Home from './components/Home';
import Emeco from './components/Emeco';
import BlaStation from './components/BlaStation';
import Lapalma from './components/Lapalma';
import Sancal from './components/Sancal';
import Rex from './components/Rex';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Home />
      <Emeco />
      <BlaStation />
      <Lapalma />
      <Sancal />
      <Rex />
      <Footer />
    </div>
  );
}

export default App;

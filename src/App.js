import React from 'react';
import styles from './App.module.css';
import Home from './components/Home';
import Emeco from './components/Emeco';
import BlaStation from './components/BlaStation';
import Lapalma from './components/Lapalma';
import Sancal from './components/Sancal';
import Rex from './components/Rex';
import Footer from './components/Footer';

class App extends React.Component {
  state = {
    emeco: 0,
    blastation: 0,
    lapalma: 0,
    sancal: 0,
    rex: 0,
  };
  setDistanceToTop = (distance, key) => {
    this.setState({ [key]: distance });
  };

  scrollToSection = logo => {
    window.scrollTo({
      top: this.state[logo],
      left: 0,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <div className={styles.App}>
        <Home scrollToSection={this.scrollToSection} />
        <Emeco setDistance={this.setDistanceToTop} />
        <BlaStation setDistance={this.setDistanceToTop} />
        <Lapalma setDistance={this.setDistanceToTop} />
        <Sancal setDistance={this.setDistanceToTop} />
        <Rex setDistance={this.setDistanceToTop} />
        <Footer />
      </div>
    );
  }
}

export default App;

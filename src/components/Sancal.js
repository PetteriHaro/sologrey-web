import React from 'react';
import './Sancal.css';
import Sancal1 from '../assets/images/sancal/sancal-1.jpg';
import Sancal2 from '../assets/images/sancal/sancal-2.jpg';
import Sancal3 from '../assets/images/sancal/sancal-3.jpg';
import Sancal4 from '../assets/images/sancal/sancal-4.jpg';
import Sancal5 from '../assets/images/sancal/sancal-5.jpg';
import Sancal6 from '../assets/images/sancal/sancal-6.jpg';
import Logo from '../assets/logos/sancal.png';
import Tuoli from '../assets/images/tuolit-1.png';
import Pallurat from '../assets/images/pallurat-2.png';

class Sancal extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const top = document.getElementById('sancaldiv').offsetTop;
      this.props.setDistance(
        window.innerWidth > 800 ? top - 20 : top,
        'sancal',
      );
    }, 1000);
  }

  render() {
    return (
      <section id="sancaldiv" style={{ marginTop: '80px' }}>
        <img alt="" src={Pallurat} className="sancal-ball-one" />
        <img src={Tuoli} alt="" className="sancal-chair" />
        <div className="grid">
          <div className="sancal-img-1">
            <img src={Sancal1} alt="Sancal" />
          </div>
          <div className="sancal-img-2">
            <img src={Sancal2} alt="Sancal" />
          </div>

          <div className="sancal-img-3">
            <img src={Sancal3} alt="Sancal" />
          </div>
          <img className="sancal-img-4" src={Sancal4} alt="Sancal" />
          <div className="sancal-img-5">
            <img src={Sancal5} alt="Sancal" />
          </div>
          <img className="sancal-img-6" src={Sancal6} alt="Sancal" />
          <img src={Logo} alt="Sancal" className="sancal-logo" />
          <div className="sancal-info">
            <p style={{ marginTop: 0 }}>
              Syntynyt Espanjan auringon alla. Tehdas sijaitsee Murciassa,
              vuoriston kätkössä, missä sähkökin tuotetaan itse tehtaan
              tarpeisiin.
              <br />
              <br />
              <br />
              Mallisto ilmentää hyvin espanjalaista identiteettiä; intohimoinen,
              avoin, riemukas, nöyrä. Muodoilla ja materiaaleilla leikittely
              sekä rakkaus luontoon ovat luoneet yhden kiinnostavimmista
              mallistoista. Rakkaus ja huumori ovat hauskanpidon salaisia
              ainesosia; jokainen tuote on tämän perheyrityksen rakkauden työ,
              kaukana perinteisestä.
            </p>
            <a
              className="external-link"
              href="https://sancal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              sancal.com
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Sancal;

import React from 'react';
import './Blastation.css';
import BlaStation1 from '../assets/images/blastation/blastation-1.jpeg';
import BlaStation2 from '../assets/images/blastation/blastation-2.jpeg';
import BlaStation3 from '../assets/images/blastation/blastation-3.jpeg';
import BlaStation4 from '../assets/images/blastation/blastation-4.png';
import BlaStation5 from '../assets/images/blastation/blastation-5.jpg';
import Logo from '../assets/logos/bla-station.png';
import Tuoli from '../assets/images/tuolit-1.png';
import Pallurat from '../assets/images/pallurat-2.png';
import Palluratt from '../assets/images/pallurat-2.png';

class BlaStation extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const top = document.getElementById('blastationdiv').offsetTop;
      this.props.setDistance(
        window.innerWidth > 800 ? top - 20 : top,
        'blastation',
      );
    }, 1000);
  }

  render() {
    return (
      <section id="blastationdiv">
        <img alt="" src={Pallurat} className="blastation-ball-one" />
        <img alt="" src={Palluratt} className="blastation-ball-two" />
        <img src={Tuoli} alt="" className="blastation-chair" />
        <div className="grid">
          <img
            src={BlaStation1}
            alt="Blå Station"
            className="blastation-img-1"
          />
          <div className="blastation-img-2">
            <img
              src={BlaStation2}
              alt="Blå Station"
              style={{ objectFit: 'contain' }}
            />
          </div>

          <img
            className="blastation-img-3"
            src={BlaStation3}
            alt="Blå Station"
          />
          <img
            className="blastation-img-4"
            src={BlaStation4}
            alt="Blå Station"
          />
          <div className="blastation-img-5">
            <img src={BlaStation5} alt="Blå Station" />
          </div>
          <img src={Logo} alt="Blå Station" className="blastation-logo" />
          <div className="blastation-info">
            <p style={{ marginTop: 0 }}>
              Innovatiivinen ruotsalainen perheyritys, jossa kokeilunhalu sekä
              avoin ja utelias mieli saa aikaan näyttäviä, edellä aikaansa
              olevia uniikkeja ja ennakkoluulottomia tuotteita. Kaikki tuotetaan
              meitä lähellä, jokaiselle tuotteelle valitaan paras mahdollinen
              valmistaja ja koko tuotantoketjun ajan seurataan kestävän
              kehityksen kriteerejä.
            </p>
            <a
              className="external-link"
              href="https://blastation.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              blastation.com
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default BlaStation;

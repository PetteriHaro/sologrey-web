import React from 'react';
import './Emeco.css';
import Emeco1 from '../assets/images/emeco/emeco-1.jpg';
import Emeco2 from '../assets/images/emeco/emeco-2.jpg';
import Emeco3 from '../assets/images/emeco/emeco-3.jpg';
import Emeco4 from '../assets/images/emeco/emeco-4.jpg';
import Emeco5 from '../assets/images/emeco/emeco-5.jpg';
import Logo from '../assets/logos/emeco-logo.png';
import Pallurat from '../assets/images/pallurat-1.png';
import Palluratt from '../assets/images/pallurat-2.png';

class Emeco extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const top = document.getElementById('emecodiv').offsetTop;
      this.props.setDistance(window.innerWidth > 800 ? top - 20 : top, 'emeco');
    }, 1000);
  }

  render() {
    return (
      <section id="emecodiv" style={{ marginTop: '80px' }}>
        <img alt="" src={Pallurat} className="emeco-ball-one" />
        <img alt="" src={Palluratt} className="emeco-ball-two" />

        <div className="grid">
          <img src={Emeco1} alt="Emeco" className="emeco-img-1" />
          <div className="emeco-img-2">
            <img src={Emeco2} alt="Emeco" style={{ objectFit: 'contain' }} />
          </div>

          <img className="emeco-img-3" src={Emeco3} alt="Emeco" />
          <img className="emeco-img-4" src={Emeco4} alt="Emeco" />
          <div className="emeco-img-5">
            <img src={Emeco5} alt="Emeco" style={{ marginLeft: '39%' }} />
          </div>
          <img src={Logo} alt="Emeco" className="emeco-logo" />
          <div className="emeco-info">
            <p style={{ marginTop: 0 }}>
              USA:n laivaston käyttöön vuonna 1944 suunniteltu, edelleen
              tuotannossa oleva ikoninen Navy tuoli on luonut pohjan Emecolle.
              Yrityksen pääajatuksena on edelleen tehdä todella laadukkaita
              tuoleja, yleensä käsin ja enimmäkseen kierrätetyistä
              materiaaleista, jotka kestävät sekä käyttöä että aikaa.
              <br />
              <br />
              <br />
              Kestävä kehitys toteutuu Emecolla kaikessa toiminnassa.
              Kierrätettyjen materiaalit kirjo on laaja. Se, mikä on meille
              roskaa, voi muuttua Emecolla esimerkiksi vastuulliseksi ja
              erittäin mukavaksi tuoliksi.
            </p>
            <a
              className="external-link"
              href="https://emeco.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              emeco.net
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Emeco;

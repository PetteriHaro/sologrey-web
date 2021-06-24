import React from 'react';
import './Lapalma.css';
import Lapalma1 from '../assets/images/lapalma/lapalma-1.png';
import Lapalma2 from '../assets/images/lapalma/lapalma-2.jpg';
import Lapalma3 from '../assets/images/lapalma/lapalma-3.jpg';
import Lapalma4 from '../assets/images/lapalma/lapalma-4.jpg';
import Lapalma5 from '../assets/images/lapalma/lapalma-5.jpg';
import Logo from '../assets/logos/lapalma.png';

class Lapalma extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const top = document.getElementById('lapalmadiv').offsetTop;
      this.props.setDistance(
        window.innerWidth > 800 ? top - 20 : top,
        'lapalma',
      );
    }, 1000);
  }

  render() {
    return (
      <section id="lapalmadiv" style={{ marginTop: '80px' }}>
        <div className="grid">
          <div className="lapalma-img-1">
            <img src={Lapalma1} alt="Lapalma" style={{ marginLeft: '-10px' }} />
          </div>
          <div className="lapalma-img-2">
            <img
              src={Lapalma2}
              alt="Lapalma"
              style={{ objectFit: 'contain' }}
            />
          </div>

          <img className="lapalma-img-3" src={Lapalma3} alt="Lapalma" />
          <img className="lapalma-img-4" src={Lapalma4} alt="Lapalma" />
          <div className="lapalma-img-5">
            <img src={Lapalma5} alt="Lapalma" />
          </div>
          <img src={Logo} alt="Lapalma" className="lapalma-logo" />
          <div className="lapalma-info">
            <p style={{ marginTop: 0 }}>
              Kaikki alkoi autotallissa Italian Codoneghessa, missä jokainen
              Lapalman tuote valmistetaan edelleen omassa modernissa tehtaassa,
              lähituotantona. Veljesten rakkaus tekniikkaan, tarkkuuteen sekä
              materiaaleihin yhdistettynä päättäväisyyteen ovat luoneet
              mallistosta minimalististen tuotteiden järjestelmän, joka on
              toimiva kaikissa ympäristöissä.
            </p>
            <a
              className="external-link"
              href="https://lapalma.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              lapalma.it
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Lapalma;

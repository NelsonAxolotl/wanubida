import "./Footer.css";
import arts from "../Pics/arts.webp";
import mix from "../Pics/mix.webp";
import maison from "../Pics/maison.webp";
import fabrik from "../Pics/fabrik.webp";
import potes from "../Pics/potes.webp";
import monts from "../Pics/monts.webp";
import lechap from "../Pics/chap.webp";
import clement from "../Pics/clement.webp";
import clem from "../Pics/clem.webp";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="title">
          <h3>- Merci à ceux et celles qui nous font confiance -</h3>
        </div>
        <div className="logo-container">
          <div className="logo-track">
            <a
              href="http://www.artstrackers.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={arts} alt="arts tracker" width="200" height="200" />
            </a>
            <a
              href="https://mixarts.org/association/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mix} alt="mix-arts" width="200" height="200" />
            </a>
            <a
              href="https://www.lapremiereseconde.fr/la-maison-theatre-de-machy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={maison}
                alt="maison théâtre de Manchy"
                width="200"
                height="200"
              />
            </a>
            <a
              href="https://lafabrik-moly.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fabrik} alt="la fabrik" width="200" height="200" />
            </a>
            <a
              href="https://www.entrepote.org/?PagePrincipale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={potes} alt="entre potes" width="200" height="200" />
            </a>
            <a
              href="https://www.montsdulyonnaistourisme.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={monts}
                alt="monts du Lyonnais"
                width="200"
                height="200"
              />
            </a>
            <a
              href="https://www.lechap.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={lechap} alt="asso lechap" width="200" height="200" />
            </a>
            <a
              href="https://www.saint-clement-de-la-place.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={clement}
                alt="mairie de st clement"
                width="200"
                height="200"
              />
            </a>
            <a
              href="https://www.facebook.com/leptitclem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={clem} alt="asso p'tit clem" width="200" height="200" />
            </a>

            {/* Doublons */}
            <a
              href="http://www.artstrackers.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={arts} alt="arts tracker" width="200" height="200" />
            </a>
            <a
              href="https://mixarts.org/association/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mix} alt="mix-arts" width="200" height="200" />
            </a>
            <a
              href="https://www.lapremiereseconde.fr/la-maison-theatre-de-machy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={maison}
                alt="maison théâtre de Manchy"
                width="200"
                height="200"
              />
            </a>
            <a
              href="https://lafabrik-moly.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fabrik} alt="la fabrik" width="200" height="200" />
            </a>
            <a
              href="https://www.entrepote.org/?PagePrincipale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={potes} alt="entre potes" width="200" height="200" />
            </a>
            <a
              href="https://www.montsdulyonnaistourisme.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={monts}
                alt="monts du Lyonnais"
                width="200"
                height="200"
              />
            </a>
            <a
              href="https://www.lechap.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={lechap} alt="asso lechap" width="200" height="auto" />
            </a>
            <a
              href="https://www.saint-clement-de-la-place.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={clement}
                alt="mairie de st clement"
                width="200"
                height="200"
              />
            </a>
            <a
              href="https://www.facebook.com/leptitclem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={clem} alt="asso p'tit clem" width="200" height="200" />
            </a>
          </div>
        </div>
        <p>
          Copyright © 2024 Compagnie Wanubida | Par
          <a
            href="https://cv-react-paraiso-nelson.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            The Cool Axolotl
          </a>
        </p>
      </footer>
    </>
  );
};
export default Footer;

import "./Billet.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import End from "../Components/End";
import affiche from "../Pics/affiche.webp";
import logo from "../Pics/logowanubida.png";
import chap3 from "../Pics/chap3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLeaf } from "@fortawesome/free-solid-svg-icons";

const Billet = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };
  return (
    <>
      <div className="billet">
        <div className="billet-titre">
          <h1>Billetterie</h1>
        </div>
        <div className="tournee">
          <h2>CABARET WANUBIDA</h2>
        </div>
        <div className="tour-p">
          <p>-La tournée du Facteur-</p>
        </div>
        <div className="poster-billet">
          <img
            src={affiche}
            alt="affiche du spectacle, la tournéée du facteur, compagnie Wanubida"
            onClick={() => handleImageClick(affiche)}
            width="850"
            height="1200"
          />
          <h2>-Kakem-</h2>
        </div>
        <div className="dates-automne">
          <h3>Les dates du printmeps</h3>
          <span>
            <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
          </span>
        </div>
        <div className="month">
          <h2>Avril</h2>
        </div>
        <div className="dates-container">
          {/* Toutes les dates */}

          <Link to="/billetterie/event1" className="date-box-billet2">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />

            <p>20h</p>
            <p>quingey (25)</p>
            <h3>18 avril 2025</h3>
          </Link>
          <Link to="/billetterie/event2" className="date-box-billet2">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Quingey (25)</p>
            <h3>19 avril 2025</h3>
          </Link>
          <Link to="/billetterie/event3" className="date-box-billet2">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Quingey (25)</p>
            <h3>20 avril 2025</h3>
          </Link>
        </div>

        <div className="billet-resa">
          <div className="contact-section2">
            <div className="resa-h2">
              <h2>Réservation</h2>
            </div>
            <div className="resa">
              <div className="mail">
                <span>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </span>
                <span>
                  <a target="_blank" href="mailto:cabaretwanubida@gmx.fr">
                    cabaretwanubida@gmx.fr
                  </a>
                </span>
              </div>
              <div className="phone">
                <span>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                </span>
                <span>Sarah : 06 31 22 48 54</span>
              </div>
              <div className="site">
                <span>
                  <a
                    target="_blank"
                    href="https://www.billetweb.fr/cabaret-wanubida"
                  >
                    Toute la billetterie en ligne
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="billet-pic2">
          <img
            src={chap3}
            alt="photo du chapiteau Wanubida"
            onClick={() => handleImageClick(chap3)}
          />
        </div>
      </div>
      {enlargedImage && (
        <div className="overlay" onClick={handleCloseImage}>
          <div className="enlarged-image-container">
            <img src={enlargedImage} alt="Enlarged" />
            <button className="close-button" onClick={handleCloseImage}>
              ×
            </button>
          </div>
        </div>
      )}

      <End />
    </>
  );
};
export default Billet;

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
          <h3>Les dates D&apos;automne</h3>
          <span>
            <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
          </span>
        </div>
        <div className="month">
          <h2>septembre</h2>
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

            <span>Première</span>
            <p>19h</p>
            <p>Roanne (42)</p>
            <h3>27 Septembre 2024</h3>
          </Link>
          <Link to="/billetterie/event2" className="date-box-billet2">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Roanne (42)</p>
            <h3>28 Septembre 2024</h3>
          </Link>
          <Link to="/billetterie/event3" className="date-box-billet2">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Roanne (42)</p>
            <h3>29 Septembre 2024</h3>
          </Link>
        </div>
        <div className="month">
          <h2>Octobre</h2>
        </div>
        <div className="dates-container">
          <Link to="/billetterie/event4" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Roanne (42)</p>
            <h3>2 Octobre 2024</h3>
          </Link>
          <Link to="/billetterie/event5" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>19h</p>
            <p>Roanne (42)</p>
            <h3>4 Octobre 2024</h3>
          </Link>
          <Link to="/billetterie/event6" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Roanne (42)</p>
            <h3>5 Octobre 2024</h3>
          </Link>
          <Link to="/billetterie/event7" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Roanne (42)</p>
            <h3>6 Octobre 2024</h3>
          </Link>
          <Link to="/billetterie/event8" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>19h</p>
            <p>Chasselay (69)</p>
            <h3>18 Octobre 2024</h3>
          </Link>
          <Link to="/billetterie/event9" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Chasselay (69)</p>
            <h3>19 Octobre 2024</h3>
          </Link>
          <Link to="/billetterie/event10" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Chasselay (69)</p>
            <h3>20 Octobre 2024</h3>
          </Link>
          <Link to="/billetterie/event11" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Chasselay (69)</p>
            <h3>23 Octobre 2024</h3>
          </Link>
          <Link to="/billetterie/event12" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>19h</p>
            <p>Chasselay (69)</p>
            <h3>25 Octobre 2024</h3>
          </Link>
          <Link to="/billetterie/event13" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Chasselay (69)</p>
            <h3>26 Octobre 2024</h3>
          </Link>
          <Link to="/billetterie/event14" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Chasselay (69)</p>
            <h3>27 Octobre 2024</h3>
          </Link>
          <Link to="/billetterie/event15" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Chasselay (69)</p>
            <h3>30 Octobre 2024</h3>
          </Link>
        </div>
        <div className="month">
          <h2>Novembre</h2>
        </div>
        <div className="dates-container">
          <Link to="/billetterie/event16" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>19h</p>
            <p>Chasselay (69)</p>
            <h3>1 Novembre 2024</h3>
          </Link>
          <Link to="/billetterie/event17" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Chasselay (69)</p>
            <h3>2 Novembre 2024</h3>
          </Link>
          <Link to="/billetterie/event18" className="date-box-billet">
            <img
              src={logo}
              alt="photo du spectale , la tournée du facteur"
              width="130"
              height="auto"
            />
            <p>16h</p>
            <p>Chasselay (69)</p>
            <h3>3 Novembre 2024</h3>
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

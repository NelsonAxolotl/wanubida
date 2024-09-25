import { Link } from "react-router-dom";
import { useState } from "react";
import "./Contact.css";
import LeafletMap from "./LeafletMap";
import LeafletMap2 from "./LeafletMap2";
import End from "../Components/End";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import pic15 from "../Pics/15.webp";
const Contact = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };
  return (
    <>
      <div className="contacts">
        <h1>Contacts</h1>
        <div className="contact-container">
          <div className="contact-section">
            <div className="contact-titre-h2">
              <h2>Administration</h2>
            </div>
            <div className="contact-titre">
              <div className="sarah">
                <p>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                </p>
                <p>Sarah : 06 31 22 48 54</p>
              </div>
              <div className="emilie">
                <p>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                </p>
                <p>Emilie : 06 24 96 29 25</p>
              </div>
              <div className="corentin">
                <p>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                </p>
                <span>Corentin : 06 80 54 05 74</span>
              </div>
            </div>
          </div>
          <div className="contact-section3">
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
            </div>
          </div>
        </div>

        <div className="reseaux">
          <h2>Réseaux</h2>
        </div>
        <div className="icons">
          <div className="facebook">
            <a
              href="https://www.facebook.com/cabaretwanubida"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
              <span className="visually-hidden">
                Suivez-nous sur Facebook
              </span>{" "}
              {/* Utiliser cette méthode pour le texte visible mais caché */}
            </a>
          </div>
          <div className="insta">
            <a
              href="https://www.instagram.com/cabaret_wanubida/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
              <span className="visually-hidden">
                Suivez-nous sur Instagram
              </span>{" "}
              {/* Utiliser cette méthode pour le texte visible mais caché */}
            </a>
          </div>
        </div>

        <div className="venir">
          <h2>Lieux du Spectacle</h2>
          <p>LA TOURNÉE DU FACTEUR</p>
        </div>
        <div className="spanny">
          <span>Septembre/Octobre 2024</span>
        </div>
        <div className="map-container">
          <div className="lieux">
            <Link
              to="https://www.entrepote.org/?Evenements"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>-Les jardins partagés-</h3>
              <h4>d&apos;EntrePote</h4>
            </Link>
            <p> 99 Rue de Clermont, 42300 Roanne</p>
            <p>
              <span>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </span>
              09 54 47 25 16
            </p>
          </div>
          <LeafletMap />
        </div>
        <div className="spanni">
          <span>Octobre/Novembre 2024</span>
        </div>
        <div className="map-container2">
          <div className="lieux2">
            <Link
              to="https://www.lapremiereseconde.fr/chateau-de-machy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>-Château de Machy-</h3>
            </Link>
            <p> 1044 Chemin de Machy</p>
            <p>69380 Chasselay</p>
            <p>
              <span>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </span>
              04 78 47 34 32
            </p>
          </div>
          <LeafletMap2 />
        </div>
      </div>
      <div className="pic-contact">
        <img
          src={pic15}
          alt="photo chapiteau de nuit"
          className="responsive-contact"
          onClick={() => handleImageClick(pic15)}
        />
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
export default Contact;

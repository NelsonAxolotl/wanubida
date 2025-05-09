// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Contact.css";
// import LeafletMap3 from "./LeafletMap3";
import End from "../Components/End";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import pic15 from "../Pics/15.webp";
const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };
  return (
    <>
      <div className="contacts animate-on-scroll">
        <h1>Contacts</h1>
        <div className="contact-container">
          <div className="contact-section animate-on-scroll">
            <div className="contact-titre-h2">
              <h2>Administration</h2>
            </div>
            <div className="contact-titre">
              <div className="sarah">
                <p>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                </p>
                <p>
                  Sarah :{" "}
                  <a href="tel:+33617806715" className="contact-phone">
                    06 31 22 48 54
                  </a>
                </p>
              </div>
              <div className="emilie">
                <p>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                </p>
                <p>
                  Emilie :{" "}
                  <a href="tel:+33624962925" className="contact-phone">
                    06 24 96 29 25
                  </a>
                </p>
              </div>
              <div className="corentin">
                <p>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                </p>
                <span>
                  Corentin :{" "}
                  <a href="tel:+33680540574" className="contact-phone">
                    06 80 54 05 74
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="contact-section3 animate-on-scroll">
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
                <span>
                  Sarah :{" "}
                  <a href="tel:+33631224854" className="contact-phone">
                    06 31 22 48 54
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="reseaux animate-on-scroll">
          <h2>Réseaux</h2>
        </div>
        <div className="icons animate-on-scroll">
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

        {/* <div className="venir">
          <h2>Lieu du Spectacle</h2>
          <p>LA TOURNÉE DU FACTEUR</p>
        </div>
        <div className="spanny">
          <span>Avril 2025</span>
        </div>
        <div className="map-container">
          <div className="lieux">
            <Link
              to="https://www.associationmallunee.com/accueil-de-spectacles"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>-La Mal Lunée-</h3>
            </Link>
            <p> 6 route D'omans, 25440 Quingey</p>

            <p>
              <span>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </span>
              <a href="tel:+33617510118" className="contact-phone">
                06 17 51 01 18
              </a>
            </p>
            <div className="spounge">
              <span>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </span>
              <span>
                <a target="_blank" href="mailto:asso.mal.lunee@gmail.com">
                  asso.mal.lunee@gmail.com
                </a>
              </span>
            </div>
          </div>
          <LeafletMap3 />
        </div> */}
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

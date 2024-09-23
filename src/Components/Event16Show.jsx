import { useState, useCallback } from "react";

import End from "./End";
import "./Event15Show.css"; // Vérifie que ce chemin est correct
import pic7 from "../Pics/7.webp"; // Vérifie que ce chemin est correct

const Event16Show = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Gérer le clic pour agrandir l'image
  const handleImageClick = useCallback(() => {
    setEnlargedImage(pic7);
  }, []);

  // Gérer la fermeture de l'image agrandie
  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  // IDs de l'événement pour la réservation
  const eventId = "5afe33ba4eeecdbd75e7776f15987751";
  const sessionId = "10510643";

  // URL de réservation
  const reservationUrl = `https://www.billetweb.fr/cabaret-wanubida?eventId=${eventId}&session=${sessionId}`;

  return (
    <>
      <div className="event1">
        <div className="kebab-case-black">
          <div className="text-section1">
            <h4>La tournée du facteur</h4>
            <p>Vendredi 1 Novembre 2024</p>
            <p>19h</p>
            <span>Château de Machy</span>
            <span>1044 chemin de Machy</span>
            <span>69380 Chasselay</span>
            <a
              href={reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Réserver
            </a>
          </div>
          <div className="frame1">
            <img
              src={pic7}
              alt="Photo spectacle La tournée du facteur"
              onClick={() => handleImageClick(pic7)}
              loading="lazy"
            />
          </div>
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

export default Event16Show;

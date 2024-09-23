import { useState, useCallback } from "react";

import End from "./End";
import "./Event15Show.css"; // Assure-toi que ce chemin est correct
import adrien from "../Pics/Adrien.webp"; // Vérifie que ce chemin est correct

const Event17Show = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Gérer le clic pour agrandir l'image
  const handleImageClick = useCallback(() => {
    setEnlargedImage(adrien);
  }, []);

  // Gérer la fermeture de l'image agrandie
  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  // IDs pour la réservation
  const eventId = "5afe33ba4eeecdbd75e7776f15987751"; // Vérifie que c'est le bon Event ID
  const sessionId = "10510644"; // Vérifie que c'est le bon Session ID

  // URL de réservation
  const reservationUrl = `https://www.billetweb.fr/cabaret-wanubida?eventId=${eventId}&session=${sessionId}`;

  return (
    <>
      <div className="event1">
        <div className="kebab-case-black">
          <div className="text-section1">
            <h4>La tournée du facteur</h4>
            <p>Samedi 2 Novembre 2024</p>
            <p>16h</p>
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
              src={adrien}
              alt="Photo spectacle La tournée du facteur"
              onClick={() => handleImageClick(adrien)}
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

export default Event17Show;

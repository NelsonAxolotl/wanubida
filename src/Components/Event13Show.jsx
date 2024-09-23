import { useState, useCallback } from "react";

import End from "./End";
import "./Event11Show.css"; // Assure-toi que le chemin du fichier CSS est correct
import pic18 from "../Pics/18.webp"; // Assure-toi que le chemin de l'image est correct

const Event13Show = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Gérer le clic sur l'image pour l'agrandir
  const handleImageClick = useCallback(() => {
    setEnlargedImage(pic18);
  }, []);

  // Gérer la fermeture de l'image agrandie
  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  // IDs de l'événement pour la réservation
  const eventId = "5afe33ba4eeecdbd75e7776f15987751";
  const sessionId = "10510640";

  // URL de réservation
  const reservationUrl = `https://www.billetweb.fr/cabaret-wanubida?eventId=${eventId}&session=${sessionId}`;

  return (
    <>
      <div className="event11">
        <div className="kebab-case-pink">
          <div className="text-section11">
            <h4>La tournée du facteur</h4>
            <p>Samedi 26 Octobre 2024</p>
            <p>16h</p>
            <span>Château de Machy</span>
            <span>1044 Chemin de Machy</span>
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
              src={pic18}
              alt="Photo spectacle La tournée du facteur"
              onClick={() => handleImageClick(pic18)}
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

export default Event13Show;

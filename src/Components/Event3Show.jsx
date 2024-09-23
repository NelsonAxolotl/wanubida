import { useState, useCallback, useEffect } from "react";

import "./Event1Show.css";
import End from "../Components/End";
import pic13 from "../Pics/13.webp"; // Assure-toi que l'image est optimisée

const Event3Show = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Précharger l'image pour améliorer la vitesse de chargement perçue
  useEffect(() => {
    const img = new Image();
    img.src = pic13;
  }, []);

  const handleImageClick = useCallback((image) => {
    setEnlargedImage(image);
  }, []);

  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  // IDs de l'événement et de la session
  const eventId = "5afe33ba4eeecdbd75e7776f15987751"; // Remplace par ton ID d'événement réel
  const sessionId = "10510629"; // Remplace par ton ID de session réel

  // URL de réservation
  const reservationUrl = `https://www.billetweb.fr/cabaret-wanubida?eventId=${eventId}&session=${sessionId}`;

  return (
    <>
      <div className="event30">
        <div className="kebab-case-green">
          <div className="text-section30">
            <h4>La tournée du facteur</h4>
            <h6>Dimanche 29 septembre 2024</h6>
            <p>16h</p>
            <span>Les jardins partagés d&apos;EntrePote</span>
            <span>99 Rue de Clermont</span>
            <span>42300 Roanne</span>
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
              src={pic13}
              alt="photo du spectacle la tournée du facteur"
              onClick={() => handleImageClick(pic13)}
              loading="eager"
              className="main-image"
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

export default Event3Show;

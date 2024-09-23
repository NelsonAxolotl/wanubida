import { useState, useCallback, useEffect } from "react";

import End from "./End";
import "./Event8Show.css"; // Assure-toi que le chemin du fichier CSS est correct
import picflo4 from "../Pics/flo4.webp"; // Assure-toi que le chemin de l'image est correct

const Event9Show = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Précharger l'image pour une expérience plus fluide
  useEffect(() => {
    const img = new Image();
    img.src = picflo4;
  }, []);

  const handleImageClick = useCallback((image) => {
    setEnlargedImage(image);
  }, []);

  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  // IDs de l'événement pour le 19 octobre 2024
  const eventId = "5afe33ba4eeecdbd75e7776f15987751"; // ID d'événement correct
  const sessionId = "10510636"; // ID de session correct

  // URL de réservation
  const reservationUrl = `https://www.billetweb.fr/cabaret-wanubida?eventId=${eventId}&session=${sessionId}`;

  return (
    <>
      <div className="event12">
        <div className="kebab-case-orange">
          <div className="text-section12">
            <h4>La tournée du facteur</h4>
            <p>Samedi 19 Octobre 2024</p>
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
              src={picflo4}
              alt="Photo du spectacle La tournée du facteur"
              onClick={() => handleImageClick(picflo4)}
              loading="eager" // Charge immédiatement pour éviter les délais
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

export default Event9Show;

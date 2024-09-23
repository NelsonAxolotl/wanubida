import { useState, useCallback, useEffect } from "react";

import "./Event11Show.css"; // Assure-toi que le chemin du fichier CSS est correct
import End from "./End";
import pic28 from "../Pics/28.webp"; // Assure-toi que le chemin de l'image est correct

const Event11Show = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Précharger l'image pour une meilleure performance et expérience utilisateur
  useEffect(() => {
    const img = new Image();
    img.src = pic28;
  }, []);

  const handleImageClick = useCallback(() => {
    setEnlargedImage(pic28);
  }, []);

  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  // IDs de l'événement
  const eventId = "5afe33ba4eeecdbd75e7776f15987751";
  const sessionId = "10510638";

  // URL de réservation
  const reservationUrl = `https://www.billetweb.fr/cabaret-wanubida?eventId=${eventId}&session=${sessionId}`;

  return (
    <>
      <div className="event1">
        <div className="kebab-case-pink">
          <div className="text-section1">
            <h4>La tournée du facteur</h4>
            <p>Mercredi 23 Octobre 2024</p>
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
              src={pic28}
              alt="Photo spectacle La tournée du facteur"
              onClick={() => handleImageClick(pic28)}
              loading="lazy" // Charger l'image au moment opportun
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

export default Event11Show;

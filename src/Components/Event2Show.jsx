import { useState, useCallback, useEffect } from "react";
import "./Event1Show.css";
import End from "../Components/End";
import groupe6 from "../Pics/groupe6.webp"; // Assure-toi que l'image est optimisée

const Event2Show = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Précharger l'image lorsque le composant se monte
  useEffect(() => {
    const img = new Image();
    img.src = groupe6;
  }, []);

  const handleImageClick = useCallback((image) => {
    setEnlargedImage(image);
  }, []);

  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  // ID de l'événement et de la session
  const eventId = "1167795";
  const sessionId = "10510628";

  // URL de réservation
  const reservationUrl = `https://www.billetweb.fr/shop.php?event=${eventId}&color=635BFF&page=1&margin=no_margin&session=${sessionId}`;

  return (
    <>
      <div className="event30">
        <div className="kebab-case-green">
          <div className="text-section30">
            <h4>La tournée du facteur</h4>
            <p>Samedi 28 septembre 2024</p>
            <p>16h</p>
            <span>Les jardins partagés d&#39;EntrePote</span>
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
              src={groupe6}
              alt="photo du spectacle la tournée du facteur"
              onClick={() => handleImageClick(groupe6)}
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

export default Event2Show;

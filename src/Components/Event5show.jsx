import { useState, useCallback, useEffect } from "react";

import "./Event4Show.css"; // Assure-toi que le fichier CSS est correctement stylisé
import End from "../Components/End";
import pic43 from "../Pics/43.webp"; // Assure-toi que l'image est optimisée et bien dimensionnée

const Event5Show = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Précharger l'image pour améliorer la vitesse de chargement
  useEffect(() => {
    const img = new Image();
    img.src = pic43;
  }, []);

  const handleImageClick = useCallback((image) => {
    setEnlargedImage(image);
  }, []);

  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  // IDs de l'événement et de la session
  const eventId = "5afe33ba4eeecdbd75e7776f15987751"; // ID d'événement correct
  const sessionIdMorning = "10595462";
  const sessionIdAfternoon = "10510631"; // ID de session correct pour le 4 octobre 2024

  // URL de réservation
  const reservationUrlMorning = `https://www.billetweb.fr/cabaret-wanubida?eventId=${eventId}&session=${sessionIdMorning}`;
  const reservationUrlAfternoon = `https://www.billetweb.fr/cabaret-wanubida?eventId=${eventId}&session=${sessionIdAfternoon}`;

  return (
    <>
      <div className="event20">
        <div className="kebab-case-purple ">
          <div className="text-section20">
            <h4>La tournée du facteur</h4>
            <p>Vendredi 4 Octobre 2024</p>
            <p>10h</p>
            <span>Les jardins partagés d&#39;EntrePote</span>
            <span>99 Rue de Clermont</span>
            <span>42300 Roanne</span>
            <a
              href={reservationUrlMorning}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Réserver
            </a>
          </div>
          <div className="frame1">
            <img
              src={pic43}
              alt="photo du spectacle la tournée du facteur"
              onClick={() => handleImageClick(pic43)}
              loading="eager"
              className="main-image"
            />
          </div>
        </div>
      </div>
      {/* Événement de l'après-midi à 16h */}
      <div className="event21">
        <div className="kebab-case-purple2">
          <div className="text-section20">
            <h4>La tournée du facteur</h4>
            <p>Vendredi 4 Octobre 2024</p>
            <p>19h</p>
            <span>Les jardins partagés d&#39;EntrePote</span>
            <span>99 Rue de Clermont</span>
            <span>42300 Roanne</span>
            <a
              href={reservationUrlAfternoon}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Réserver
            </a>
          </div>
          <div className="frame1">
            <img
              src={pic43}
              alt="Image du spectacle La tournée du facteur"
              onClick={() => handleImageClick(pic43)}
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

export default Event5Show;

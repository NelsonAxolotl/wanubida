import { useState, useCallback } from "react";
import End from "./End";
import "./Event15Show.css"; // Assure-toi que ce chemin est correct
import pic19 from "../Pics/19.webp"; // Vérifie que ce chemin est correct

const Event18Show = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Gérer le clic pour agrandir l'image
  const handleImageClick = useCallback(() => {
    setEnlargedImage(pic19);
  }, []);

  // Gérer la fermeture de l'image agrandie
  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  // IDs pour la réservation
  const eventId = "5afe33ba4eeecdbd75e7776f15987751"; // Vérifie que c'est le bon Event ID
  const sessionIdMorning = "10510645"; // ID de session pour l'événement de 11h
  const sessionIdAfternoon = "10510646"; // ID de session pour l'événement de 16h

  // URL de réservation pour chaque créneau
  const reservationUrlMorning = `https://www.billetweb.fr/cabaret-wanubida?eventId=${eventId}&session=${sessionIdMorning}`;
  const reservationUrlAfternoon = `https://www.billetweb.fr/cabaret-wanubida?eventId=${eventId}&session=${sessionIdAfternoon}`;

  return (
    <>
      {/* Événement du matin à 11h */}
      <div className="event1">
        <div className="kebab-case-black">
          <div className="text-section1">
            <h4>La tournée du facteur</h4>
            <p>Dimanche 3 Novembre 2024</p>
            <p>11h</p>
            <span>Château de Machy</span>
            <span>1044 chemin de Machy</span>
            <span>69380 Chasselay</span>
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
              src={pic19}
              alt="Image du spectacle La tournée du facteur"
              onClick={handleImageClick}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Événement de l'après-midi à 16h */}
      <div className="event2">
        <div className="kebab-case-black2">
          <div className="text-section1">
            <h4>La tournée du facteur</h4>
            <p>Dimanche 3 Novembre 2024</p>
            <p>16h</p>
            <span>Château de Machy</span>
            <span>1044 chemin de Machy</span>
            <span>69380 Chasselay</span>
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
              src={pic19}
              alt="Image du spectacle La tournée du facteur"
              onClick={() => handleImageClick(pic19)}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Affichage de l'image agrandie */}
      {enlargedImage && (
        <div className="overlay" onClick={handleCloseImage}>
          <div className="enlarged-image-container">
            <img src={enlargedImage} alt="Image agrandie" />
            <button
              className="close-button"
              onClick={handleCloseImage}
              aria-label="Fermer"
            >
              ×
            </button>
          </div>
        </div>
      )}
      <End />
    </>
  );
};

export default Event18Show;
